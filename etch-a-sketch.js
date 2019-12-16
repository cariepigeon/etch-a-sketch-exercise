/* eslint-disable */
/* Select the elements on the page - canvas, shake button  */
const canvas = document.querySelector('#etch-a-sketch');
// canvas is the element, and the place where we do our drawing is called the context
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

/* setup our canvas for drawing */
/* could use destructuring... const {width, height} = canvas; */
const  width = canvas.width;
const height = canvas.height;

/* create random x and y starting points on the canvas */
const x = Math.floor(Math.random() * width);
const y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round'; // these two methods (lineJoin and lineCap) makes sure that we get smooth drawing.
ctx.lineCap = 'round'; // by default you would get squared off edge instead of round.
ctx.lineWidth = 10;

// start drawing.  this puts the pen down somewhere on the page.
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

/* write a draw function */
/* using 'options' allows us to pass in an object, and then we can pass in EVERYTHING that we wish to pass into this.  Inside of this we can pass in different properties of that object that we need*/
function draw(options) {
  console.log(options);

}

/* write a handler for the keys */
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault(); //prevent arrow keys from scrolling the page. we want arrow keys to just move drawing
    /* here the 'options' argument is 'key', and it's property, e.key (the key pressed when event occured) */
    draw({ key: e.key });
    console.log(e.key);
  }
}

/* clear/shake function */

/* listen for arrow keys */
window.addEventListener('keydown', handleKey);