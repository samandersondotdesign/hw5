function setup() { 
  createCanvas(400, 400);
	background(255);
	noFill();
	stroke('rgba(0,0,0,0.1)');
	for (x = 0; x < 800; x+=20) {		
		ellipse (200,200,x,x);
	}
		for (y = 0; y < 900; y+=20) {		
		ellipse (200,400,y,y);
	}
	for (c = 0; c < 900; c+=20) {		
		ellipse (200,0,c,c);
	}
	for (p = 0; p < 900; p+=20) {		
		ellipse (0,200,p,p);
	}
	for (p = 0; p < 900; p+=20) {		
		ellipse (400,200,p,p);
	}
}
 
