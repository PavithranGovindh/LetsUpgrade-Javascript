let count = 0;
let products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "product1.jpeg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "product2.jpeg",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "product3.png",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "product4.jpeg",
    description: "Beautifull Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 1300,
    image: "product5.jpeg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "product6.jpg",
    description: "Good looking Traditional Dress",
  },
  {
    id: 7,
    name: "Italian Dress",
    size: "M",
    color: "Hekka",
    price: 1990,
    image: "product7.jpg",
    description: "Good looking Modern Dress",
  },
   {
    id: 8,
    name: "White Skirt",
    size: "L",
    color: "white",
    price: 1100,
    image: "product8.jpeg",
    description: "Good looking white skirt",
  },
  {
    id: 9,
    name: "Casual Black Pant",
    size: "32",
    color: "Black",
    price: 1600,
    image: "product9.jpeg",
    description: "Slim fit black Pant",
  },

  {
    id: 10,
    name: "Women Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 1500,
    image: "product10.png",
    description: "Good looking Checked Shirt",
  },

  {
    id: 11,
    name: "Black male Blazer",
    size: "M",
    color: "Black",
    price: 3700,
    image: "product11.jpeg",
    description: "Fabulous Blazer",
  },

  {
    id: 12,
    name: "Navy Blue Jean",
    size: "32",
    color: "Blue",
    price: 1000,
    image: "product12.jpeg",
    description: "Good looking Jean",
  },
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
  document.getElementsByClassName("cart2")[0].innerHTML = `Cart(${count})`;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function addToCart(id) {
  // getting the product
  let pro = getProductByID(products, id);

  //   putting in cart
  
  let index = cart.indexOf(pro);
  if (index == -1)
    {
      cart.push(pro);
      count +=1;
    }
  else 
    {
      alert("Already exist in cart");
    }
  document.getElementsByClassName("cart2")[0].innerHTML = `Cart(${count})`;
  displayProducts(cart, "cart");
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  count -=1;
  console.log(count);
  document.getElementsByClassName("cart2")[0].innerHTML = `Cart(${count})`;
  displayProducts(cart, "cart");
}

function priceFilter()
{
  let minPrice = document.getElementById("minPrice").value;
  console.log(minPrice);
  let maxPrice = document.getElementById("maxPrice").value;
  
  let filteredProduct = products.filter(function(product){
    return maxPrice >= product.price && minPrice <= product.price;
  })
  
  displayProducts(filteredProduct); 
}



























