//Q1 : Search for a particular character in a string

let name = 'LetsUpgrade';

console.log('Answer 1:')
for(let i= 0 ; i <= name.length -1 ; i++)
{
  if(name[i] == 'e')
      console.log('Present at an index : ' + i);
}

//Q2 : Minutes to seconds 
let minutes = 20;
let seconds = minutes * 60;

console.log( 'Answer 2:\n' + seconds + ' Seconds in ' +minutes + ' minutes');

//Q3 : search for a element in a array of strings

let fruits = ['Apple','Bannana','Cherries','Dates','Emblica'];

console.log('Answer 3 :')

fruits.forEach(function(element){ if(element == 'Cherries')
{console.log('Element ' + element + ' is there'); }});
// //Q4 : Display only elements containing 'a' in them from a array

let flowers = ['Jasmine','Rose','Lotus','Lily','Water lily','Dandelion','Hyacinth','Daisy'];

console.log('Answer 4: ')
flowers.forEach(function(element){
  for(let i=0; i<element.length ; i++)
    {
      if(element[i] == 'a')
        {
          console.log(element);
          i=element.length;
        }
    }
});

//Q5 : Print Array in reverse format

let freshFruits = ['Apple','Bannana','Cherries','Dates','Emblica'];
console.log('Answer 5:\nArray in reverse Order')

let i = freshFruits.length - 1 ;
for(;i>=0;i--)
  {
    console.log(freshFruits[i]);
  }
  