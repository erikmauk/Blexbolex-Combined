//Project 1 by Erik Mauk and Victoria Rund

//Erik's global variables
	var scaleBiker = 1;
	var xBiker = 295;
	var yBiker = 345;
	var move_biker;

//Victoria's global variables
	var scaleP = .75;
	var xP = 675;
	var yP = 370;
	var counter = 1;
	var shrink_person;

function setup() {
   createCanvas(800, 400);

   move_biker = true;
   shrink_person = true;
}

// Tree Trunks
function trunk(x, y){
	fill(228, 211, 218);
	rect(x, y, 10, 120);
	
	push();
	stroke(89, 70, 65);
	strokeWeight(1);
	// Brown lines
		line(x+1, y+85, x+5, y+85);
		line(x+3, y+60, x+5, y+60);
		line(x+2, y+30, x+7, y+30);
		line(x+4, y+45, x+9, y+45);
		line(x+1, y+35, x+8, y+35);
		line(x+1, y+70, x+5, y+70);
		line(x+5, y+95, x+8, y+95);
		line(x+2, y+90, x+7, y+90);
		line(x+2, y+100, x+9, y+100);
		line(x+6, y+80, x+9, y+80);
		line(x+5, y+55, x+9, y+55);
		pop();
}

// Tree Tops
function treeTop(x,y,){

	push();
	translate(x, y);
	rotate(12*PI/13);
	fill(129, 136, 94);
	ellipse(0,0, 60, 100);
	pop();
	
	fill(129, 136, 94);
	arc(x-23, y-70, 80, 80, PI/4, PI/2);

	push();
	translate(x-5, y-45);
	rotate(6*PI/8);
	fill(129, 136, 94);
	ellipse(0, 0, 20, 50);
	pop();
	
	push();
	translate(x-23, y-30);
	fill(129, 136, 94);
	ellipse(0, 0, 10, 60);
	pop();
}

// Biker
function drawBiker(x, y, rot, sc){
		push();
		translate(x, y);
		rotate(rot);
		scale(sc);
		
		// Tires
			push();
			noFill();
			stroke(85);
			strokeWeight(2);
			// Back tire
			ellipse(-50, 10, 23, 19);
			// Front tire
			ellipse(10, 10, 23, 19);
			pop();

		// Back leg
			push();
			translate(-35, -15);
			rotate(-PI/32);
			fill(80,70,136);
			rect(-1,4,5,20);
			pop();

		// Frame
			push();
			noFill();
			stroke(114, 157, 202);
			strokeWeight(1.75);
			triangle(-50, 10, -35, -5, -27, 13);
			triangle(-35, -5, 0, -5, -26,13);
			line(0, -5, 10, 10);
			pop();

		// Chain and pedal
			fill(114, 157, 202);
			ellipse(-27, 13, 8, 8);
			fill(175,179,191);
			ellipse(-27, 13, 5, 5);
			fill(60);
			ellipse(-27, 17, 11, 3);
			push();
			translate(-27, 13);
			rotate(PI/12);
			fill(99,108,71);
			rect(-1, -7, 2, 9);
			rotate(-PI/12);
			rect(1, -7, 4, 2);
			pop();

		// Seat
			push();
			translate(-37, -10);
			rotate(-PI/12);
			fill(199,193,187);
			rect(0, 0, 2, 5);
			pop();
			push();
			translate(-38, -12);
			rotate(PI/2.5);
			fill(96,76, 74);
			ellipse(0, 0, 4, 8);
			pop();

		// Foot and leg
			push();
			translate(-23, 2);
			rotate(PI/12);
			fill(203,193,191);
			rect(-3,-7, 5, 8);
			fill(85);
			ellipse(1, 2, 10, 4);
			fill(96, 63, 64);
			rect(-3, -14, 5, 9);
			rect(-8,-16, 9, 6);
			ellipse(0, -13.75, 5, 5);
			fill(80,70,136);
			ellipse(-11, -13,15,10);
			pop();

		// Shirt, neck, head
			//Neck and head
			push();
			translate(-34, -18);
			rotate(-PI/48);
			fill(96, 63, 64);
			rect(17,-17, 8,6);
			pop();
			push();
			translate(-34, -18);
			rotate(PI/18);
			fill(96, 63, 64);
			ellipse(22, -20, 10, 8);
			pop();
				//Shirt
				push();
				translate(-34, -18);
				fill(103, 113, 75);
				quad(0, 0, 17, -19.5, 19, -8, 7, .5);
				push();
				rotate(-6*PI/8);
				fill(103, 113, 75);
				ellipse(1, 12, 8, 27);
				pop();

		// Arms
			push();
			translate(16, -7);
			fill(96, 63, 64);
			quad(0, 1, 3, -1 , 17.5, 14, 13, 14);
			pop();

		// Hat
			push();
			translate(15, 0);
			fill(255);
			arc(11, -17.5, 9, 8, 9*PI/8, PI/8);
			pop();
			push();
			translate(27, -17.5);
			rotate(PI/6);
			stroke(255);
			strokeWeight(.75);
			line(0,0, 7, -1);
			pop();
		pop();
}

function drawPerson(x,y,sc){
   push();
      translate(x,y);
      scale(sc);
      //foot
         fill(115,66,24);
         ellipse(-3,-47,10,55)
         fill(254,246,209);
         ellipse(-3,-47,8,45);
         fill(115,66,24);
         beginShape();
            vertex(-5,-20);
            bezierVertex(-5,-20,-5,-40,-6,-60);
            bezierVertex(-6,-60,-25,-100,-57,-165);
            bezierVertex(-57,-165,-65,-140,-70,-115);
            bezierVertex(-70,-115,-35,-60,-5,-20);
         endShape(CLOSE);
         //leg bent
         beginShape();
            vertex(-65,-110);
            vertex(-85,-60);
            vertex(-148,-75);
            vertex(-150,-105);
            vertex(-100,-95);
            vertex(-100,-140)
         endShape(CLOSE);

         ellipse(-150,-80,10,50);
         ellipse(-145,-59,15,10);
         //jacket
         beginShape();
            vertex(-100,-140);
            vertex(-120,-130);
            vertex(-140,-170);
            vertex(-120,-180);
         endShape(CLOSE);
         
         beginShape();
            curveVertex(-100,-140);
            curveVertex(-100,-170);
         curveVertex(-120,-165);
            curveVertex(-120,-130);
         endShape(CLOSE);

         beginShape();
            //left side of arms
            vertex(-120,-180);
            bezierVertex(-140,-220,-150,-240,-130,-340);
            bezierVertex(-130,-340,-127,-345,-125,-346);
            bezierVertex(-125,-346,-115,-348,-100,-350);
            bezierVertex(-100,-350,-100,-300,-100,-200);
            //middle and right side
            bezierVertex(-100,-200,-88,-186,-75,-200);
            bezierVertex(-75,-200,-75,-300,-75,-350);
            bezierVertex(-75,-350,-62,-349,-50,-346);
            bezierVertex(-50,-346,-47,-341,-45,-340);
            bezierVertex(-50,-340,-10,-240,-55,-160);
         endShape(CLOSE);
         //filling in jacket
         beginShape();
         vertex(-70,-110);
         vertex(-60,-110);
         vertex(-100,-120);
         vertex(-100,-140);
         vertex(-110,-150);
         vertex(-120,-180);
         vertex(-55,-175);
         endShape(CLOSE);
         //green shirt
         fill(124,130,40);
         beginShape();
            vertex(-100,-200);
            bezierVertex(-100,-200,-100,-280,-100,-350);
            bezierVertex(-100,-350,-95,-352,-95,-355);
            bezierVertex(-95,-355,-93,-355,-80,-355);
            bezierVertex(-80,-355,-78,-353,-75,-350);
            bezierVertex(-75,-350,-75,-280,-75,-200);
            bezierVertex(-75,-200,-87,-185,-100,-200);
         endShape(CLOSE);
         //face
        	fill(222,105,92);
         	beginShape();
             	vertex(-95,-355);
             	bezierVertex(-95,-355,-100,-355,-99,-363);
             	bezierVertex(-99,-363,-98,-366,-98,-370);
             	bezierVertex(-98,-370,-108,-370,-98,-375);
             	bezierVertex(-98,-375,-97,-380,-98,-385);
             	bezierVertex(-98,-385,-97,-387,-96,-390);
             	bezierVertex(-96,-390,-93,-393,-90,-395);
             	bezierVertex(-90,-395,-60,-390,-80,-355);
         	endShape(CLOSE);
         //hair
         
             fill(110,72,26);
             ellipse(-83,-392,20,10);

        	 beginShape();
           	 vertex(-90,-395);
           	 bezierVertex(-90,-395,-90,-396,-88,-397);
           	 bezierVertex(-88,-397,-83,-397,-75,-396);
           	 bezierVertex(-75,-396,-70,-394,-71,-393);
           	 bezierVertex(-71,-393,-69,-389,-69,-388);
             bezierVertex(-69,-388,-70,-378,-71,-374);
           	 bezierVertex(-71,-374,-72,-372,-73,-370);
           	 bezierVertex(-73,-370,-74,-368,-75,-366);
           	 bezierVertex(-75,-366,-76,-364,-77,-362);
           	 bezierVertex(-77,-362,-78,-361.5,-79,-362);
           	 bezierVertex(-79,-362,-78,-364,-77,-366);
           	 bezierVertex(-77,-366,-76,-368,-76,-370);
           	 bezierVertex(-76,-370,-75,-372,-75,-373);
           	 bezierVertex(-75,-373,-75,-374,-75,-375);

           	 bezierVertex(-75,-375,-77,-376,-78,-377);
           	 bezierVertex(-78,-377,-79,-376,-80,-375);
           	 bezierVertex(-80,-375,-80,-374,-81,-373);

           	 bezierVertex(-81,-373,-82,-372,-83,-372);
           	 bezierVertex(-83,-372,-84,-372,-84,-373);

           	 bezierVertex(-84,-373,-83,-375,-83,-376);
           	 bezierVertex(-83,-376,-83,-379,-84,-380);
           	 bezierVertex(-84,-380,-85,-385,-90,-390);

         endShape(CLOSE);

      pop();
}

function draw()
{
	//Erik's Background Elements
		fill(223, 208, 215)
		rect(0,0, 800,100)

		noStroke();

		// Text
			push();
			fill(222, 100, 126);
			textSize(72);
			textFont("Helvetica");
			text("ESCAPE", 40, 90);
			pop();

		// Sky
			fill(128, 171, 216);
			rect(0, height/4, width, 3*height/4);

		// Grass
			fill(107, 116, 75);
			rect(0, 5*height/6, width, height/6);

		// Path
			fill(206, 198, 205);
			rect(0, 7*height/8, width, height/16);

		// Tree Trunks
			push();
			trunk(50, 217);
			trunk(180, 217);
			trunk(308, 217);
			trunk(420,217);
			trunk(540,217);
			pop();

		// Tree tops
			treeTop(50, 190);
			treeTop(183,190);
			treeTop(310, 190);
			treeTop(422, 190);
			treeTop(542,190);

	//Victoria's Background Elements
		//fill(223, 208, 215);
		//rect(400,0, 400, 400);

	//sign
    	push();
    	stroke(0);
    	fill(132,178,195);
    	rect(695,200,10,150);
    	pop();
    	fill(229,80,36);
    	ellipse(700,200,40,40);
    	fill(255,280,207);
    	rect(685,195,30,10);

    //Moving Biker
    	push();
		drawBiker(xBiker, yBiker, 0, 1);

		if(move_biker && xBiker < 645){
			xBiker += 1.5*scaleBiker
		}
		pop();

   drawPerson(xP,yP,scaleP*counter);
	
	if(shrink_person && counter > .05){
      counter-=.005;
  }

}




