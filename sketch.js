

/*
  SELF PORTRAIT
  by Lauren Marone
  
  Display a self-portrait made out of simple shapes. The face should change between angry, surprised, and "cool"   if you press the corresponding letter. 
  
*/

var skin = '#ffcfba';
var skinShadow = '#b88a6e';
var bl = '#4d738a';
var hair = '#ffe49e';
var lips = '#ffad8a';
var darkLips = '#A52003';
var eyes = (255, 255, 255);
var eyeY = 350;
var rightEyeX = 480;
var leftEyeX = 320;

var diam = 50;

var state;
var stateStatic = 1;
var stateSurprised = 2;
var stateAngry = 3;
var stateCool = 4;


function setup() {
  noCursor();
  createCanvas(800, 800);
  state = stateStatic;
  
  smooth();
  frameRate(5);
  
}

function draw() {

  
  background(0);
  
  //Background bubbles that appear when you move your mouse
  for(var y = 50; y < mouseY; y += 75){ // y=50 is distance from top + y+= 75 is distance between circles
    for (var i = 50; i < mouseX; i += 100){ // i=50 is distance from left side + i+= 75 is distance btwn circ
      fill('#46BDA7');
      ellipse(i, y, diam, diam);

    }
  }
  
//  ----------------------------------- BASE --------------------------------------------
  

  
    // ---------------------------- HAIR (in back) ------------------------------

    //LEFT
    rotate(0.3);
    noStroke();
    fill(hair);
    ellipse(370, 240, 300, 600);

    //RIGHT
    rotate(-0.6);
    fill(hair);
    ellipse(370, 530, 300, 600);

    //BOTTOM
    rotate(0.3);
    fill(hair);
    ellipse(width/2, 575, 600, 300);



    // ---------------------------- NECK ------------------------------

    //BASE
    fill(skin);
    rect(315, 500, 170, 200);

    //SHADOW
    fill(skinShadow);
    ellipse( width/2, 430, 310, 450);



    // ---------------------------- BASE FACE SHAPE ------------------------------

    fill(skin);
    ellipse( width/2, height/2, 350, 500);



    // ---------------------------- EAR ------------------------------

    fill(skin);
    ellipse(580, height/2 + 25, 50, 100); 



    // ---------------------------- EYES ------------------------------

    drawEyes();


    // ---------------------------- HAIR (in front) ------------------------------

    noStroke();

    //TOP
    rotate(0.6);
    fill(hair);
    ellipse(380, 45, 80, 300);

    //BOTTOM
    rotate(-0.3);
    fill(hair);
    ellipse(340, 350, 80, 300);


    rotate(-0.2);


    //  ---------------------------- NOSE ------------------------------

    //MIDDLE LINE
    stroke(skinShadow);
    strokeWeight(2);
    noFill();
    rotate(-0.3);
    arc(260, 490, 50, 70, 0, QUARTER_PI);

    //TOP LINE
    stroke(skinShadow);
    rotate(-0.1);
    noFill();
    arc(237, 435, 50, 70, 0, QUARTER_PI);

    //BOTTOM LINE
    stroke(skinShadow);
    strokeWeight(2);
    noFill();
    rotate(-0.1);
    arc(183, 590, 70, 50, PI, PI+QUARTER_PI);

    //NOSTRILS

    rotate(0.4);
    //Left
    fill(0);
    noStroke();
    ellipse(385, 480, 15, 3);

    //Right
    fill(0);
    noStroke();
    ellipse(413, 480, 15, 3);



    

//  ----------------------------------- STATIC STATE --------------------------------------------
  
  if(state == stateStatic){
    
        // ---------------------------- EYEBROWS ------------------------------

      rotate(0.3);
      //RIGHT
      rotate(-0.4);
      fill(hair);
      rect(400, 340, 70, 10);

      fill(hair);
      triangle(469, 340, 469, 350, 510, 360);

      //LEFT
      rotate(0.2);
      fill(hair);
      rect(327, 260, 70, 10);
    
    
        //  ---------------------------- LIPS ------------------------------

      rotate(-0.1);
      //RIGHT
      fill(lips);
      triangle(413, 520, 390, 530, 480, 530);

      //LEFT
      fill(lips);
      triangle(385, 520, 320, 530, 410, 530);

      //BOTTOM
      fill(lips);
      quad(320, 530, 480, 530, 420, 560, 378, 560);
    
  }
  
  
  
 
//  ----------------------------------- SURPRISED STATE --------------------------------------------
  
  if (state == stateSurprised){
    

      // ---------------------------- EYEBROWS ------------------------------

      rotate(0.3);
      //RIGHT
      rotate(-0.2);
      fill(hair);
      rect(465, 220, 70, 10);

      fill(hair);
      triangle(533, 220, 533, 230, 560, 240);

      //LEFT
      rotate(-0.2);
      fill(hair);
      rect(260, 300, 70, 10);
    
    

    
      //  ---------------------------- LIPS ------------------------------
      rotate(0.1);
      //RIGHT
      fill(lips);
      triangle(413, 520, 390, 530, 450, 530);

      //LEFT
      fill(lips);
      triangle(385, 520, 350, 530, 410, 530);

      //BOTTOM
      fill(lips);
      quad(350, 530, 450, 530, 420, 570, 378, 570);

      //MIDDLE
      fill(0);
      ellipse(width/2, 546, 50, 20);
    }
  
  
  
//  ----------------------------------- "COOL" STATE --------------------------------------------
  
  if (state == stateCool){
      // ---------------------------- EYEBROWS ------------------------------

      rotate(0.3);
      //RIGHT
      rotate(-0.4);
      fill(hair);
      rect(400, 340, 70, 10);

      fill(hair);
      triangle(469, 340, 469, 350, 510, 360);

      //LEFT
      rotate(0.2);
      fill(hair);
      rect(327, 260, 70, 10);
    
    
      //  ---------------------------- LIPS ------------------------------

      rotate(-0.1);
      //RIGHT
      fill(darkLips);
      triangle(413, 520, 390, 530, 480, 530);

      //LEFT
      fill(darkLips);
      triangle(385, 520, 320, 530, 410, 530);

      //BOTTOM
      fill(darkLips);
      quad(320, 530, 480, 530, 420, 560, 378, 560);
    
    
      //  ---------------------------- GLASSES ------------------------------
      
      fill(255, 0, 0, 70);
      stroke(255);
      ellipse(320, 360, 110, 55);
      ellipse(480, 360, 110, 55);
    
      line(375, 360, 425, 360);
      line(535, 360, 575, 360);

      rotate(0.6);
      noStroke();
      rotate(-0.3);
      fill(hair);
      ellipse(340, 350, 80, 300);
    
  }
  
//  ----------------------------------- ANGRY STATE --------------------------------------------
  
  if (state == stateAngry){
    

      // ---------------------------- EYEBROWS ------------------------------

      rotate(0.3);
      //RIGHT
      rotate(-0.6);
      fill(hair);
      rect(320, 425, 70, 10);

      fill(hair);
      triangle(390, 425, 390, 435, 430, 445);

      //LEFT
      rotate(0.5);
      fill(hair);
      rect(355, 230, 70, 10);
    
    

    
      //  ---------------------------- LIPS ------------------------------
      rotate(-0.2);
      //RIGHT
      fill(lips);
      triangle(413, 520, 350, 550, 480, 545);

      //LEFT
      fill(lips);
      triangle(385, 520, 320, 545, 440, 550);

      //BOTTOM
      fill(lips);
      quad(320, 545, 480, 545, 420, 560, 378, 560);
    
    
    
    
      //  ---------------------------- CHEEKS ------------------------------
      fill(255, 0, 0, 30);
      noStroke();
      ellipse(320, 420, 110, 55);
      ellipse(480, 420, 110, 55);
    
      rotate(0.6);
      noStroke();
      rotate(-0.3);
      fill(hair);
      ellipse(340, 350, 80, 300);
    
    
    }
  
}


function keyPressed(){
  if (key == 's'){
    state = stateSurprised;
  }
  
  else if(key == 'c'){
    state = stateCool;
  }
  
  else if(key == 'a'){
    state = stateAngry;
  }
  
}

function mouseClicked(){
  state = stateStatic;
  
}



//Function to make the eyes blink at random
function drawEyes(){
  

  if(random(10) < 9){
    
      //WHITES
      fill(eyes);
      noStroke();
      ellipse(rightEyeX, eyeY, 100, 50);

      fill(eyes);
      ellipse(leftEyeX, eyeY, 100, 50);


      //CORNEA
      fill(bl);
      ellipse(rightEyeX, eyeY, 50, 50);

      fill(bl);
      ellipse(leftEyeX, eyeY, 50, 50);


      //PUPIL
      fill(0);
      ellipse(rightEyeX, eyeY, 20, 20);

      fill(0);
      ellipse(leftEyeX, eyeY, 20, 20);


      //CREASE
      fill(skinShadow); 
  }
  
  else {
    
    //CLOSED EYE
      stroke(skinShadow); 
      noFill();
      arc(480, 350, 100, 50, 0, PI);

      stroke(skinShadow); 
      noFill();
      arc(320, 350, 100, 50, 0, PI);   
  }
  
}


