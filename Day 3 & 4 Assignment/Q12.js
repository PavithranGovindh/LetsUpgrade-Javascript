function firstImage()
{
  console.log("changing to first image");
  const image = document.getElementsByClassName("imageOne");
  const imageNew="https://images.all-free-download.com/images/graphiclarge/beautiful_the_outskirts_scenery_picture_2_165896.jpg";
  image[0].src=imageNew;
  console.log("changed to first image");
}
function secondImage()
{
  console.log("changing to second image");
  const image = document.getElementsByClassName("imageOne");
  const imageNew="https://wallpaperaccess.com/full/1376490.jpg";
  image[0].src=imageNew;
  console.log("changed to second image");
}
function thirdImage()
{
  console.log("changing to third image");
  const image = document.getElementsByClassName("imageOne");
  const imageNew="https://www.tomfornorthdakota.com/wp-content/uploads/2018/11/natural-sceneries-hd-wallpapers-charming-natural-scenery-hd-wallpaper-1-18-landscape.jpg";
  image[0].src=imageNew;
  console.log("changed to third image");
}
function copyText()
{
  const name = document.getElementsByClassName("input");
  name[1].value = name[0].value;
}