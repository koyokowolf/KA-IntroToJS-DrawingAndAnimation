/* Bucky's eyes are drawn as ellipses, and the last two numbers represent their width and height.*/

/* Step 1: Create a variable that stores the eye size and use that to change the size of both eyes. Once you've done that, have fun dragging the slider to make HUGE eyes and teeeeny tiny eyes.*/



ellipse(150, 70, 60, 120);  // left ear
ellipse(240, 70, 60, 120);  // right ear

ellipse(200, 170, 150, 150);    // face

fill(0, 0, 0);

//Step 1 (Eyesize)
var eyesize = 18;
ellipse(170, 150, eyesize, eyesize);  // left eye
ellipse(230, 150, eyesize, eyesize);  // right eye

line(150, 200, 250, 200);   // mouth

noFill();

/* Bucky's buckteeth are drawn as rectangles, and the last number is the height of the rectangle.*.

/* Step 2: Create a variable to store the length of the teeth so that you can change the length of both buckteeth at once.*/

// Step 2 (Toothlength)
var toothlength = 18;
rect(185, 200, 15, toothlength); // left tooth
rect(200, 200, 15, toothlength); // right tooth
