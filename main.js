const x = document.querySelector('#bar');
const y = document.querySelector('#meNu');

function showMenu(){
if (y.style.right == '-100%') {
 console.log('Hello Jex!');
  y.style.right = '0%';
  x.setAttribute('src', '/Img/Icons/xmark.svg');
} else {
 console.log('Nope Jex!');
  y.style.right = '-100%';
  x.setAttribute('src', '/Img/Icons/bars.svg');
}
  
}