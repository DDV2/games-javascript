function fondo(){
	if(!peligro && !araña.muerta()){
		miedoEs.rate(1.25);
		miedoEs.setVolume(0.3);
		miedoEs.play();
		chanMiedo.setVolume(0.5);
		chanMiedo.play();
		peligro = true;
	}
	if(vientoB.isPlaying){
		vientoB.stop();
	}
	bosqueLoop = true;



	background(10);
	image(fondo0[1], 0, 300, 1000, 597);

	for(var i = 0; i < 9; i++){
		image(fondo0[0], -440+ 122* i, 588, 122, 122);
	}

	//esto inicia los ataques de telas solo cuando se esta en la zona de peligro, y la araña esta viva
	if(zonaDePeligro && !araña.muerta()){
		//araña despierta muestra los corazones, y empieza a atacar.
		araña.despierta();
		for(let ataquess of ataques){
			ataquess.show();
			ataquess.update(karla);
			if(ataquess.y > height){
				ataques.push(new Tela(karla.x));
				ataques.splice(0, 1);
			}
		}
		//esto ve si los disparos de karla llegan al corazon de la araña
		for(var i = 0; i < disparos.length; i++){
			if(araña.check(disparos[i].x, disparos[i].y)){
				disparos.splice(i, 1);
				// magiaGolpe.play();
			}
		}

	}

	araña.show();
	//gemaaa
	push();
	image(gema, xgema, ygema, 50, 50);
	ygema+=gemaGravedad;
	pop();

	//muestra y mueve a los disparos de karla
	for(let dispaross of disparos){
		dispaross.update();
		dispaross.show();
		if(dispaross.y < -15){
			disparos.splice(0, 1);
		}
	}


	if(araña.muerta()){
		if(gemaQueCae){
			gemaSound.setVolume(0.3);
			gemaSound.rate(1);
			gemaSound.play();
			gemaQueCae = false;
		}
		ataques = [];
		gemaGravedad = 3;
		if(ygema > height - 65 || xgema != 0){
			gemaGravedad = 0;
			if(karla.x < 16 && karla.x > -10 && karla.y === height - 65){
					xgema = -470;
					ygema = 60;
					gemaObtenida = true;
			}
		}


	}
	pequeñasArañas();
	//esto elimina los ataques apenas toquen a karla
	for(var i = 0; i < ataques.length; i++){
		if(karla.check(ataques[i].ptx, ataques[i].pty)){
			ataques.splice(i, 1);
			ataques.push(new Tela(karla.x));
		}
	}

}


function bosque(){
	aranitaProx = true;
	peligro = false;
	casaLoop = true;
	if(bosqueLoop){
		vientoB.loop();
		bosqueLoop = false;
	}
	if(vientoF.isPlaying){
		vientoF.stop();
	}
	if(miedoEs.isPlaying){
		miedoEs.stop();
	}

	background(77, 196, 79);
	image(fondo1[4], 0, 300, 1000, 597);
	image(fondo1[3], 0, 300, 1000, 597);
	image(fondo1[2], 0, 300, 1000, 597);
	image(fondo1[2], 0, 300, 1000, 597);

	image(fondo1[0], -439, 574, 122, 152);
	for(var i = 0; i < 8; i++){
		image(fondo1[1], -317+ 122* i, 574, 122, 152);
	}

	for(let particulas of randomPuntos){
		particulas.show();
		particulas.update();
	}
	//reset algunas situaciones de la escena 0
	disparos = [];
	ataques = [];
	ataques[0] = new Tela(0);
	zonaDePeligro = false;
	xarañitas = 540;
	xarañitasact = 0;
	xa = 500;
	xb = -500;

	if(gemaObtenida){
		push();
		fill(255, 0, 0);
		image(gema, -470, 60, 50, 50);
		pop();
	}
}

function casa(){
	bosqueLoop = true;
	if(casaLoop){
		vientoF.loop();
		casaLoop = false;
	}
	if(vientoB.isPlaying){
			vientoB.stop();
	}
	push();
	fill(38, 104, 24);
	rect(400, 640, 300, 50);
	pop();
	image(fondo2[3], 0, 320, 1000, 650);
	image(fondo2[0], -439, 604, 122, 92);
	for(var i = 0; i < 6; i++){
		image(fondo2[1], -317+ 122* i, 604, 122, 92);
	}
	image(fondo2[2], 400, 616, 122, 69);

	if(!araña.muerta()){
		araña.vidas = 10;
	}
	//
	push();
	noStroke();
	fill(255);
	ellipse(300 + xsol, 100, 100);
	fill(255, 252, 137, 90);
	ellipse(300 + xsol, 100, 150 + grandez);
	fill(255, 191, 92, 70);
	ellipse(300 + xsol, 100, 200 - grandez);

	if(grandez > 60){
		plus = -1;
	}else if (grandez < 0){
		plus = 1;
	}
	grandez+= plus * 0.25;

	pop();
	if(gemaObtenida && !gemaEntregada){
		push();
		fill(255, 0, 0);
		image(gema, -450, 60, 50, 50);
		pop();
	}
	dany.show(karla);

	if(mostrarFin){
		xsol-= 0.05;
		opacidad+=2;
		push();
		textSize(100);
		text("¡Fin!", -105, 200);
		fill(250, 50, 100, opacidad);
		noStroke();
		let x = 0 + random(-1, 1);
		let y = 270 + random(-1, 1);
		let ancho = 290 + random(-5, 5);
		let alto = 70 + random(-5, 5);
		rect(x, y, ancho, alto);
		fill(0, opacidad);
		textSize(30);
		text("Comenzar de nuevo", -134 + random(-1, 1), 280 + random(-1, 1));
		pop();
		if(mouseX > x - ancho/2 + 500 && mouseX < x + ancho/2 + 500&& mouseY > y - alto/2 && mouseY < y + alto/2 && mouseIsPressed){
			startGame = false;
			randomPuntos = [];
			ataques = [];
			vientoF.stop();
			heartB.stop();
			condicionesIniciales(2);
		}
	}

}



class partAire{
	constructor(){
		this.x = random(-500, 500);
		this.y = random(-200, 400);
		this.t = random(4, 13);
	}
	show(){
		push();
		image(particula, this.x, this.y, this.t, this.t);
		pop();
	}
	update(){
		this.y +=0.5;
		this.x -= 0.2;
		if(this.y > 600){
			this.y = 0;
			this.x = random(-500, 550);

		}
	}
}
