function setup() { 
  createCanvas(400, 400);
	background(255);
	stroke('rgba(0,0,0,0.14)');
	for (x = 0; x < 150; x+=5) {		
		line (x,0,x,400);
	}
	for (y = 0; y <= 400; y+=5) {
		line (146,y,400,y)
	}
	for (d = 0; d <= 600; d+=5) {
		line (145-d,0,145,d);
	}
	for (v = 0; v <= 700; v+=5) {
		line (145+v,0,145,v);
	}
}
