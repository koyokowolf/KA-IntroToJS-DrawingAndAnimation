/*We've drawn a snowman on a sunny day, and you'll add color to this drawing so that the snowman knows how sunny it really is!*/

/* Step 1: Use the background() command to change the color of the sky (Blue might be a nice color to use).  The background command needs to go before all the other commands in the program. HINT: background(r, g, b)*/

//The sky (Step 1)
background(12, 204, 201);

/* Step 2: Use the fill() command to change the color of the ground (Green might be a nice color to use). The fill() command needs to come before the rect() command that draws the ground. Don't worry if the color of the other shapes changes too, you'll fix them later! HINT: fill(r, g, b)*/

//The ground (Step 2)
fill(13, 255, 0);
rect(0, 300, 400, 100);

/* Step 3: Add another fill() command to change the color of the sun (Orange or yellow might be nice colors to use). The fill() command needs to be before the ellipse() command for the sun. Don't worry if the color of the snowman changes too, you'll fix him next!*/

//The sun (Step 3)
fill(225, 255, 0);
ellipse(80, 64, 100, 100);

/* Step 4: Add another fill() command to change the color of the snowman (White might be a nice color to use). All three parts of the snowman's body should be one color, not three different colors, so you only need to add one fill() command for this step. The fill() command needs to be before the ellipse() commands for the snowman.*/

//The snowman (Step 4)
fill(247, 244, 244);
ellipse (200, 300, 150, 150);
ellipse (200, 200, 100, 100);
ellipse (200, 120, 75, 75);
