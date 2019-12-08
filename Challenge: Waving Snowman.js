/* We've drawn a snowman like you made in the first challenge, and now you're going to draw more shapes using the commands you just learned.*/

/* Step 1: use the rect() command to draw the ground, so that the snowman isnt' just floating in air. You should add your rect() command before the ellipse() commands for the snowman, so that the snowman looks like he is in front of the ground. HINT: rect(x, y, width, height); width can be written in other codes as (w) and height as (h)*/

//Ground (Step 1)
rect(0, 350, 400, 50);

//Snowman
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);

/* Step 2: Add two line() commands, one for each arm. You should add your line() commands after the ellipse() commands for the snowman, so that the arms look like they are in front of the snowman. HINT: line(x1, y1, x2, y2)*/

//Left arm (Step 2)
line(160, 200, 50, 75);

//Right arm (Step 2)
line(240, 200, 350, 75);
