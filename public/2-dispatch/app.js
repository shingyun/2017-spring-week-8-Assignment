var W = d3.select('#plot1').node().clientWidth,
	H = d3.select('#plot1').node().clientHeight;

var dispatch = d3.dispatch('mouse:move');
//SVG 1
// var svg1 = d3.select('#plot1').append('svg')
// 	.attr('width',W)
// 	.attr('height',H)
// 	.on('mousemove',function(){
// 		var xy = d3.mouse(this); //the x,y coordinates of the mouse in relation to the <svg> element itself
// 		d3.select(this).select('.pointer')
// 			.attr('cx',xy[0])
// 			.attr('cy',xy[1]);

// 		dispatch.call('mouse:move',this,xy)
// 		//Hint: dispatch.call('mouse:move',this,xy)
// 	});

// svg1.append('circle').attr('class','pointer') 
// 	.attr('r',5)
// 	.style('fill','red');

// dispatch.on('mouse:move.svg1',function(xy){
    
//     d3.select('#plot2').select('.pointer').attr('cx',xy[0]).attr('cy',xy[1]);

// })
// //Hint: dispatch.on('mouse:move.svg1',function(xy){...})
// //Note the use of .svg1: we add a "name space" to the "mouse:move" event to attach multiple event listeners to the same event

// //SVG 2
// var svg2 = d3.select('#plot2').append('svg')
// 	.attr('width',W)
// 	.attr('height',H)
// 	.on('mousemove',function(){
// 		var xy = d3.mouse(this); //the x,y coordinates of the mouse in relation to the <svg> element itself
// 		d3.select(this).select('.pointer')
// 			.attr('cx',xy[0])
// 			.attr('cy',xy[1]);

// 		dispatch.call('mouse:move',this,xy)
// 	});

// svg2.append('circle').attr('class','pointer') 
// 	.attr('r',5)
// 	.style('fill','red');

// dispatch.on('mouse:move.svg2',function(xy){
    
//     d3.select('#plot1').select('.pointer').attr('cx',xy[0]).attr('cy',xy[1]);

// })

//Can you think of a concise way to make all the dots move in the same way across all .plot elements?
//Hint below:
var xy;

d3.selectAll('.plot').append('svg')
	.attr('width',W)
	.attr('height',H)
	.on('mousemove',function(){
		xy = d3.mouse(this);
		dispatch.call('mouse:move',this,xy);
	})
	.each(function(){
		d3.select(this).append('circle').attr('class','pointer')
		  .attr('r',5).style('fill','red');
	})
	.each(function(d,i){
		dispatch.on('mouse:move.'+i, function(){
			d3.select('#plot'+i).select('.pointer').attr('cx',xy[0]).attr('cy',xy[1]);
		})
	});


