function PresentacionGame(){

	background(250, 200, 100);
	line(x, 0, x, height);
	line(0, x/1.4, width, x/1.4);
	x+= 10;
	ancho+= rot * 3;
	if(x > width){
	 x = 0;
	}
	push();
	fill(150, 0, 200, 100);
	noStroke();
	ellipse(800, height/2, 900);
	pop();

	push();
	translate(500, 245)
	rotate(ang);
	fill(255, 50,100);
	stroke(0);
	textSize(120);
	image(imagen1, 0, 0, 960, 450);
	push();
	rotate(-ang * 3);
	text("game", -180, 30);
	pop();
	pop();

	//pistacho
	push();
	translate(width + 100 - x * 1.5, 570);
	rotate(-x/150);
	image(pistacho, 0, 0, 140, 140);
	pop();

	//botoooon
	let rx = random(-2,2);
	push();
	//jugar boton
	if(!(mouseX < width/2 + rx + 100 && mouseX > width/2 + rx - 100 && mouseY < 605 + rx && mouseY > 515 + rx)){
		push();
		fill(250, 50, 100, 150);
		rect(width/2 + rx, 560 + rx, 200, 90);
		fill(0);
		textSize(50);
		text("Jugar", width/2 - 63 + random(-2,2), 575 + random(-2,2));
		pop();
	} else {
		push();
		fill(250, 50, 100);
		noStroke();
		image(playIm, width/2 + rx, 560 + rx, 120, 120);
		pop();
	}


	//dificultad boton
	if(mouseX < width * 0.73 + rx + 90 && mouseX > width * 0.73 + rx - 90 && mouseY < 575 + rx && mouseY > 545 + rx){
		fill(0, 50, 250);
	} else {
		fill(0, 50, 250, 150);
	}
	push();
	rect(width * 0.73 + rx, 560 + rx, 180, 30);
	fill(0);
	textSize(25);
	text("Dificultad", width * 0.68 + rx * -1, 568 + rx);
	pop();
	if(showMenuDif){
		push();
		textSize(20);
		fill(0, 50, 250, 150);
		if(mouseX < width * 0.88 + 50 && mouseX > width * 0.88 - 50 && mouseY < 540 && mouseY > 520){
			fill(0, 150, 250, 200);
		} else {
			fill(0, 50, 250, 150);
		}
		rect(width * 0.88 + rx, 530, 100, 20);
		if(mouseX < width * 0.88 + 50 && mouseX > width * 0.88 - 50 && mouseY < 570 && mouseY > 550){
			fill(0, 150, 250, 200);
		} else {
			fill(0, 50, 250, 150);
		}
		rect(width * 0.88 + rx, 560, 100, 20);
		if(mouseX < width * 0.88 + 50 && mouseX > width * 0.88 - 50 && mouseY < 600 && mouseY > 580){
			fill(0, 150, 250, 200);
		} else {
			fill(0, 50, 250, 150);
		}
		rect(width * 0.88 + rx, 590, 100, 20);
		fill(0);
		text("Facil",width * 0.86 + rx, 538);
		text("Normal",width * 0.85 + rx, 568);
		text("Dificil",width * 0.86 + rx, 598);
		pop();

	}

	//controles boton
	if(mouseX < width * 0.34 + 30 && mouseX > width * 0.34 - 30 && mouseY < 590 && mouseY > 530){
		fill(200, 100, 20, 150);
	} else {
		fill(150, 50, 220, 100);
	}
	rect(width * 0.34 + rx * -1, 560 + rx, 60, 60);
	image(controlesIm, width * 0.34 + rx, 560 + rx, 50, 50);


	if(showControles){
		push()
		fill(150, 50, 220, 200);
		rect(154, 488, 280, 300);
		fill(0);
		textSize(24);
		image(flechasIm, 90, 400, 90, 80);
		text("=  Movimiento", 140, 420);
		textSize(26);
		image(spaceIm, 90, 500, 120, 90);
		text("= Disparar", 160, 510);
		image(enterIm, 90, 580, 110, 110);
		text("= Dialogo", 150, 590);

		pop();
	}

	pop();

	ang+= rot * 0.003;
	if(ang > 0.03){
		rot = -1;
	}
	if(ang < -0.03){
		rot = 1;
	}
}

function mousePressed(){
	if(!startGame){
		if(mouseX < width * 0.34 + 30 && mouseX > width * 0.34 - 30 && mouseY < 590 && mouseY > 530){
			showControles = !showControles;
		}

		if(mouseX > width/2 - 100 && mouseX < width/2  + 100 && mouseY > 515 && mouseY < 605){
    	startGame = true;
		}

		if(mouseX < width * 0.73 + 90 && mouseX > width * 0.73 - 90 && mouseY < 575 && mouseY > 545){
			showMenuDif = !showMenuDif;

		}

		////////////
		if(showMenuDif && mouseX < width * 0.88 + 50 && mouseX > width * 0.88 - 50 && mouseY < 540 && mouseY > 520){
			dificultad = 1;
			dificultadTelas = 4;
			showMenuDif = false;
		}
		if(showMenuDif && mouseX < width * 0.88 + 50 && mouseX > width * 0.88 - 50 && mouseY < 570 && mouseY > 550){
			dificultad = 0.5;
			dificultadTelas = 5;
			showMenuDif = false;
		}
		if(showMenuDif && mouseX < width * 0.88 + 50 && mouseX > width * 0.88 - 50 && mouseY < 600 && mouseY > 580){
			dificultad = 0.25;
			dificultadTelas = 9;
			showMenuDif = false;
		}

	}

	if(!karla.alive()){
		karlaquegira.dir *= -1;
		showButon = true;
		if(showButon && mouseX > 790 && mouseX < 990 && mouseY > 565 && mouseY < 615){
			randomPuntos = [];
			condicionesIniciales(2);
		}
		if(showButon && mouseX < 210 && mouseX >10 && mouseY < 615 && mouseY > 565){
			startGame = false;
			randomPuntos = [];
			condicionesIniciales(2);
		}

	}
}


function GameOver(){
	background(30);
	karlaquegira.update();
	karlaquegira.show();
	push();
	translate(500, 325);
	fill(random(255));
	stroke(0);
	textSize(70);
	text("Game Over", -175, 20);

	if(showButon){
		if(mouseX > 790 && mouseX < 990 && mouseY > 565 && mouseY < 615){
			// noStroke();
			fill(250, 50, 100);
		} else {
			fill(250, 50, 100, 190);
		}
		rect(390, 265, 200, 50);
		fill(0);
		textSize(25);
		text("Jugar de nuevo", 303, 275);
	}
	pop();
	push();
	if(showButon){
		stroke(0);
		if(mouseX < 210 && mouseX >10 && mouseY < 615 && mouseY > 565){
			fill(250, 50, 100);
		} else {
			fill(250, 50, 100, 190);
		}
		rect(110, 590, 200, 50);
		textSize(25);
		fill(0);
		text("Volver a inicio", 30, 600);
	}
	pop();
}


class karlarotation{
	constructor(){
		this.xCenter = 500;
		this.yCenter = 325;
		this.y;
		this.x;

		this.angle = 0;
		this.dir = 1;
		this.history = [];
	}

	update(){
		this.x = this.xCenter + cos(this.angle) * 250;
		this.y = this.yCenter + sin(this.angle) * 250;
		this.x+= random(-2, 2);
		this.y+= random(-2, 2);
		this.angle+= this.dir * 0.03;

		let v = createVector(this.x, this.y);
		this.history.push(v);
		if(this.history.length > 20){
			this.history.splice(0, 1);
		}
	}

	show(){
		for(var i = 1; i < this.history.length + 1; i++){
			let pos = this.history[i - 1];
			image(karlaimg, pos.x, pos.y, i * 2, i * 2);
		}
		push();
		translate(this.x, this.y);
		rotate(this.angle * -3);
		image(karlaimg, 0, 0, 55, 55);
		pop();
	}
}
