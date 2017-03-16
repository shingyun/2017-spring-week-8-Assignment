//Part 1: Append a <canvas> element under <div id='plot1'> with the same width and height as the container element
//Store drawing context as a variable
//Hint: use canvas.getContext('2d');

var w = d3.select('.plot').node().clientWidth,
	h = d3.select('.plot').node().clientHeight;

var canvas = d3.select('#plot1').append('canvas')// canvas is flat, manipulating pixel, no DOM
    .attr('width',w)
    .attr('height',h)
    .node();

var ctx = canvas.getContext('2d') ;

//Part 2: Draw a gray background, with fillStyle = 'rgb(250,250,250)'

ctx.fillStyle = 'rgb(250,250,250)';
ctx.fillRect(0,0,w,h);		

//Part 3: Draw a x and y grid, spaced 50px apart, with strokeStyle = 'rgb(180,180,180)'
//Hint: use context2D.beginPath and context2D path commands within two for... loops

ctx.strokeStyle = 'rgb(180,180,180)'
ctx.lineWidth = 0.5;

ctx.beginPath();

for(var i=0; i<=h; i+=50){
    ctx.moveTo(0,i);
    ctx.lineTo(w,i);
}

for( var i=0; i<w; i+=50){

    ctx.moveTo(i,0);
    ctx.lineTo(i,h);
}

 ctx.stroke();

//Part 4: Draw a filled red rectangle at (50,50), with width = 50 and height = 50
//Draw a rectangle with red border at (150,50), with width = 50 and height = 50
//Hint: use context2D.fillRect and context2D.strokeRect
ctx.fillStyle = 'rgb(255,0,0)';
ctx.fillRect(50,50,50,50);

ctx.strokeStyle = 'rgb(255,0,0)';
ctx.strokeRect(150,50,50,50);

// Part 5: Draw a series of circles and lines using the context2D path commands, as shown
ctx.beginPath();
ctx.arc(100,200,50,0,Math.PI*2);
ctx.fillStyle = 'rgba(255,0,0,.5)';
ctx.fill();

ctx.beginPath();
ctx.arc(400,200,50,0,Math.PI*2);
ctx.moveTo(750,200);
ctx.arc(700,200,50,0,Math.PI*2);
ctx.strokeStyle = ('rgb(255,0,0)');
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,200);
ctx.quadraticCurveTo(250,100,400,200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400,200);
ctx.quadraticCurveTo(550,300,700,200);
ctx.stroke();


// Part 6: Label each circle with coordinates
// Hint: context2D.fillText
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillText('(100,200)',100,200);
ctx.fillText('(400,200)',400,200);
ctx.fillText('(700,200)',700,200);

// Part 7: append a new <canvas> element under <div id='plot2'>, and copy the content of the first canvas onto it
var canvas2 = d3.select('#plot2').append('canvas')
    .attr('width',w)
    .attr('height',h)
    .node();

var ctx2 = canvas2.getContext('2d');
ctx2.drawImage(canvas,0,0);









