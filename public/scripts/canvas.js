// // console.log('hello');

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// fitToContainer(canvas);

function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width ='100%';
  canvas.style.height='100%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}


var c = canvas.getContext('2d');

// Event Listener

var mouse = {
	x: undefined,
	y: undefined
}

var maxRadius = 40;

window.addEventListener('mousemove', function(event){
	mouse.x = event.x;
	mouse.y = event.y;

	});

window.addEventListener('resize', function(event){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
});


// Making Multiple Circles

function Circle(x, y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function(){
		c.beginPath();
		c.strokeStyle = '#a4dbc2';
		c.fillStyle = '#a4dbc2';
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.stroke();
		c.fill();
	}
	this.update = function(){
		 if (this.x + this.radius > (canvas.width) || this.x - this.radius < 0){
		this.dx = -this.dx;
	}

	if (this.y + this.radius > (canvas.height) || this.y - this.radius < 0){
		this.dy = -this.dy;
	}
	

// Interactivity

	if (mouse.x - this.x < 80 && mouse.x - this.x > -80 && mouse.y - this.y < 80 && mouse.y - this.y > -80){
		// this.dx = -this.dx;
		// this.dy = -this.dy;
		this.radius = 0;
	}

	this.x += this.dx;
	this.y += this.dy;


	this.draw();
	} 
}

// Randomizer


// New Circles

var circleArray = [];



function radiusSize (min, max){
	min = Math.ceil(30);
	max = Math.floor(70);
	return Math.floor(Math.random() * (max - min)) + min;
}

console.log(circleArray);

// INIT Function

function init(){

	circleArray = [];

	for (var i = 0; i < 30; i++) {
		var radius = radiusSize(); 
		var x = Math.random() * (innerWidth - radius * 2) + radius;
		var dx = Math.random() - 0.5;

		var y = Math.random() * (innerHeight - radius * 2) + radius;
		var dy = Math.random() - 0.5;

		circleArray.push(new Circle(x, y, dx, dy, radius));
	}
}


// Animate Function

function animate (){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++){
		circleArray[i].update();
	}




	
}

init();

animate();







