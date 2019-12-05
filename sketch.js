let paint_mode = false;
let eraser = false;
let line_mode = true;
let brush = false;
let brush2 = false;
let brush3 = false;
let brush4 = false;
let fill_screen = false;
let line_color;

function setup() {

    let canvas = createCanvas(600, 600);
    canvas.parent("p5")
    line_color = color(0);
    background('white');
}

function draw() {
	var redColor = document.getElementById('r');
	var greenColor = document.getElementById('g');
	var blueColor = document.getElementById('b');
	var sWeight = document.getElementById('lineSize');
	var Alp = document.getElementById('alp');
	fill(redColor.value, greenColor.value, blueColor.value);
	strokeWeight(sWeight.value);
	stroke(redColor.value, greenColor.value, blueColor.value);
	if(paint_mode) {
		if(eraser) {
			push();
			strokeWeight(100);
			stroke(255);
			fill(255);
			line(pmouseX, pmouseY, mouseX, mouseY); 
			pop();
		}
		if(line_mode) {
			push();
			fill(redColor.value, greenColor.value, blueColor.value);
			strokeWeight(sWeight.value);
			let temp_color = color(redColor.value, greenColor.value, blueColor.value);
			temp_color.setAlpha(abs(Alp.value - 255));
			stroke(temp_color);
			line(pmouseX, pmouseY, mouseX, mouseY); 
			pop();
		}
		if(brush) {
			push();
			noStroke();
			let x = 10 * sWeight.value * .75;
			let temp_color = color(redColor.value, greenColor.value, blueColor.value);
			temp_color.setAlpha(abs(Alp.value - 255));
			fill(temp_color);
			circle(random(mouseX - x, mouseX + x), random(mouseY - x, mouseY + x), 1.5 * sWeight.value);
			circle(random(mouseX - x, mouseX + x), random(mouseY - x, mouseY + x), 1.5 * sWeight.value); 
			circle(random(mouseX - x, mouseX + x), random(mouseY - x, mouseY + x), 1.5 * sWeight.value);
			circle(random(mouseX - x, mouseX + x), random(mouseY - x, mouseY + x), 1.5 * sWeight.value);  
			pop();
		}
		if(brush2) {
			let x = 5 + (sWeight.value * 1.5);
			push();
			let temp_color = color(redColor.value, greenColor.value, blueColor.value);
			temp_color.setAlpha(abs(Alp.value - 255));
			fill(temp_color);
			strokeWeight(sWeight.value);
			stroke(temp_color);
			line(mouseX - x, mouseY + x, mouseX + x, mouseY - x);
			line(mouseX - x, mouseY - x, mouseX + x, mouseY + x);  
			pop();
		}
		if(brush3) {
			let x = 5 * sWeight.value;
			push();
			let temp_color = color(redColor.value, greenColor.value, blueColor.value);
			temp_color.setAlpha(abs(Alp.value - 255));
			fill(temp_color);
			strokeWeight(sWeight.value);
			stroke(temp_color);
			beginShape();
				vertex(mouseX - x, mouseY + x);
				vertex(mouseX + x, mouseY - x);
				vertex(pmouseX + x, pmouseY - x);
				vertex(pmouseX - x, pmouseY + x);
			endShape(CLOSE);
			// line(mouseX - x, mouseY + x, mouseX + x, mouseY - x);  
			pop();
		}
		if(brush4) {
			let x = 15;
			push();
			let temp_color = color(redColor.value, greenColor.value, blueColor.value);
			temp_color.setAlpha(abs(Alp.value - 255));
			fill(temp_color);
			strokeWeight(sWeight.value);
			stroke(temp_color);
			beginShape();
				vertex(pmouseX - random(-x, x), pmouseY + random(-x, x));
				vertex(mouseX + random(-x, x), mouseY - random(-x, x));
				vertex(pmouseX + random(-x, x), pmouseY - random(-x, x));
				vertex(pmouseX - random(-x, x), pmouseY + random(-x, x));
				vertex(mouseX - random(-x, x), mouseY + random(-x, x));
				
			endShape(CLOSE);;  
			pop();
		}
		if(fill_screen) {
			background(redColor.value, greenColor.value, blueColor.value);
		}
	}
	strokeWeight(5);
	stroke(0);
	noFill();
	square(0, 0, 600);

}

function mousePressed() {
	paint_mode = true;
}

function mouseReleased() {
	paint_mode = false;
}

var t = function( p ) { 
  p.setup = function() {
    p.createCanvas(87, 25);
  };

  p.draw = function() {
  	p.background('white')
    var sWeight = document.getElementById('lineSize');
    p.strokeWeight(sWeight.value);
    p.line(10, 12.5, 77, 12.5);

  };
};
var myp5 = new p5(t, 'c2');

var t = function( p3 ) { 
  p3.setup = function() {
    p3.createCanvas(87, 25); //87, 25);
  };

  p3.draw = function() {
  	p3.background('white')
    var Alp = document.getElementById('alp');
    p3.strokeWeight(20);
    line_color.setAlpha(abs(Alp.value - 255));
    p3.stroke(line_color);
    p3.line(10, 12.5, 77, 12.5);

  };
};
var myp5 = new p5(t, 'c4');

var t = function( p2 ) { 
  p2.setup = function() {
    p2.createCanvas(100, 600);
    p2.background('white');
    p2.stroke(0);
    p2.noFill();
    p2.strokeWeight(5);
    p2.rect(0, 0, 100, 600);
    p2.strokeWeight(3);
    p2.push();
    p2.fill(0);
    p2.square(15, 15, 65); //eraser
    p2.fill(255);
    p2.circle(47, 47, 50);
    p2.pop();
    p2.square(15, 95, 65); //line_mode
    p2.push();
    p2.strokeWeight(10);
    p2.line(25, 127, 70, 127);
    p2.pop();
    p2.square(15, 180, 65); // brush
    p2.push();
    p2.noStroke();
    p2.fill(0);
    p2.circle(47, 210, 7);
    p2.circle(60, 220, 7);
    p2.circle(48, 223, 7);
    p2.circle(39, 200, 7);
    p2.circle(39, 224, 7);
    p2.circle(52, 199, 7);
    p2.circle(58, 209, 7);
    p2.circle(35, 213, 7);
    p2.pop();
    p2.square(15, 265, 65); //X brush
    p2.push();
    p2.strokeWeight(5);
    p2.line(25, 275, 70, 320);
    p2.line(25, 320, 70, 275);
    p2.pop();
    p2.square(15, 350, 65); //bot left to top right brush
    p2.push();
    p2.strokeWeight(5);
    p2.line(25, 405, 70, 360);
    p2.pop();
    p2.square(15, 435, 65); //rand brush
    p2.push();
    p2.fill(0);
    p2.beginShape();
		p2.vertex(25, 440);
		p2.vertex(65, 485);
		p2.vertex(45, 444);
		p2.vertex(65, 440);
		p2.vertex(30, 465);
		p2.vertex(50, 480);
	p2.endShape(CLOSE);    
	p2.pop();
	p2.fill(0);
    p2.square(15, 520, 65); //fill screen with color
  };

  p2.mousePressed = function() {
  	if(p2.mouseX > 15 && p2.mouseX < 80 && p2.mouseY > 15 && p2.mouseY < 80) {
  		eraser = true;
  		line_mode = false;
  		brush = false;
  		brush2 = false;
  		brush3 = false;
  		brush4 = false;
  		fill_screen = false;
  	}
  	if (p2.mouseX > 15 && p2.mouseX < 80 && p2.mouseY > 95 && p2.mouseY < 160) {
  		eraser = false;
  		line_mode = true;
  		brush = false;
  		brush2 = false;
  		brush3 = false;
  		brush4 = false;
  		fill_screen = false;
  	}
  	if (p2.mouseX > 15 && p2.mouseX < 80 && p2.mouseY > 180 && p2.mouseY < 245) {
  		eraser = false;
  		line_mode = false;
  		brush = true;
  		brush2 = false;
  		brush3 = false;
  		brush4 = false;
  		fill_screen = false;
  	}
  	if (p2.mouseX > 15 && p2.mouseX < 80 && p2.mouseY > 265 && p2.mouseY < 330) {
  		eraser = false;
  		line_mode = false;
  		brush = false;
  		brush2 = true;
  		brush3 = false;
  		brush4 = false;
  		fill_screen = false;
  	}
  	if (p2.mouseX > 15 && p2.mouseX < 80 && p2.mouseY > 350 && p2.mouseY < 415) {
  		eraser = false;
  		line_mode = false;
  		brush = false;
  		brush2 = false;
  		brush3 = true;
  		brush4 = false;
  		fill_screen = false;
  	}
  	if (p2.mouseX > 15 && p2.mouseX < 80 && p2.mouseY > 435 && p2.mouseY < 500) {
  		eraser = false;
  		line_mode = false;
  		brush = false;
  		brush2 = false;
  		brush3 = false;
  		brush4 = true;
  		fill_screen = false;
  	}
  	if (p2.mouseX > 15 && p2.mouseX < 80 && p2.mouseY > 520 && p2.mouseY < 585) {
  		eraser = false;
  		line_mode = false;
  		brush = false;
  		brush2 = false;
  		brush3 = false;
  		brush4 = false;
  		fill_screen = true;
  	}
  };
};
var myp5 = new p5(t, 'c3');