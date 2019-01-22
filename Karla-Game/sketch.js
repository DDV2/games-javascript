let canvas;

let botonCargarJuego;
let cargarJuego;

let startGame;
let loading;
let counterFiles;
let totalFiles;


//Loading SCREEN variables
let loadingImg, diametro, flow,angleFl;
//
let karla, dany, araña, xarañitas, yarañitas, xa, xb, xarañitasact;
let xgema, ygema, gemaGravedad, gemaObtenida, gemaEntregada, mostrarFin, opacidad, escena, zonaDePeligro, grandez, plus, xsol;
let mensaje;
let finalFelizDisp;
let stopMoving;

let ataques = [];
let disparos= [];
//variables para el mensaje inicial y final
let ang, rot, x, ancho;
let karlaquegira, showButon, showMenuDif, dificultad, dificultadTelas, playIm, controlesIm, showControles, flechasIm, spaceIm, enterIm;

//images
let spiderImages = [];
let fondo0 = [];
let fondo1 = [];
let fondo2 = [];
let randomPuntos = [];
let karlaIzq = [];
let karlaDer = [];
let danyImages = [];
let imagen1, pistacho, karlaimg, corazones, arañita, arañita2, vidaAra, gema, indexSpider;
let particula;
let karladispara;
let karlaSentada;
let contadorImagenes; //ESTE ES EL CONTADOR DE LAS IMAGENES PARA KARLA CAMINANDO
//sound
let vientoF, vientoB, pastoP, miedoEs, disparosSon, magiaGolpe, sonidoArm, aranitasSon, chanMiedo, chatSound, gemaSound, pasosPiedra;
let tada, heartB;
let heartBeat, peligro, casaLoop, bosqueLoop, aranitaProx, arMuer, pisadasLoopm, chatHabilitado, gemaQueCae;

function preload(){
	loadingImg = loadImage("material/loadingImg.png");
}

function setup() {
	canvas = createCanvas(1000, 650);
	canvas.parent(canvaspos);
	botonCargarJuego = createButton("Cargar Juego");
	botonCargarJuego.mousePressed(loadGameBitch);
	cargarJuego = false;
}

function loadGameBitch(){
	cargarJuego = true;
	rectMode(CENTER);
	imageMode(CENTER);
	// angleMode(DEGREES);
	condicionesIniciales(2);
	startGame = false;
	dificultad = 0.5;
	dificultadTelas = 5;
	loading = true;
	counterFiles = 0;
	totalFiles = 63;

	for(var i = 0; i < 7; i++){
		cargarImagenAr(karlaIzq, 'material/Kizq/Karla-'+ i +'.png', i);
	}
	for(var i = 0; i < 7; i++){
		cargarImagenAr(karlaDer, 'material/Kder/Karla-'+ i +'.png', i);
	}
	for(var i = 0; i < 6; i++){
		cargarImagenAr(danyImages, 'material/danyImages/dany' + i + '.png', i);
	}
	for(var i = 0; i < 2; i++){
		cargarImagenAr(fondo0, 'material/fondo0' + i + '.png', i);
	}
	for(var i = 0; i < 5; i++){
		cargarImagenAr(fondo1, 'material/fondo1' + i + '.png', i);
	}
	for(var i = 0; i < 4; i++){
		cargarImagenAr(fondo2, 'material/fondo2' + i + '.png', i);
	}
	for(var i = 0; i < 2; i++){
		cargarImagenAr(spiderImages, 'material/spider.' + i + '.png', i);
	}
	imagen1 = loadImage("material/imagenn.jpg", loadedFilee);
	pistacho = loadImage("material/pistacho.png", loadedFilee);
	controlesIm = loadImage("material/controles.png", loadedFilee);
	flechasIm = loadImage("material/flechas.png", loadedFilee);
	spaceIm = loadImage("material/space.png", loadedFilee);
	enterIm = loadImage("material/enter.png", loadedFilee);
	playIm = loadImage("material/play.png", loadedFilee);
	karlaSentada = loadImage("material/karlaFin.png", loadedFilee);
	karladispara = loadImage("material/karladispara.png", loadedFilee);
	corazones = loadImage("material/corazon.png", loadedFilee);
	arañita = loadImage("material/aranita.png", loadedFilee);
	arañita2 = loadImage("material/aranita2.png", loadedFilee);
	vidaAra = loadImage("material/vidaArania.png", loadedFilee);
	gema = loadImage("material/gema.png", loadedFilee);
	particula = loadImage("material/particula.png", loadedFilee);
	karlaimg = loadImage("material/karlaimg.jpg", loadedFilee);

	vientoF= loadSound("sonidos/vientoFuerte.wav", loadedFilee);
	vientoB= loadSound("sonidos/bosqueViento.mp3", loadedFilee);
	pastoP= loadSound("sonidos/pisadasRecortarr.mp3", loadedFilee);
	miedoEs = loadSound("sonidos/EscenarioAra.mp3", loadedFilee);
	disparosSon = loadSound("sonidos/disparo.mp3", loadedFilee);
	magiaGolpe = loadSound("sonidos/dañoMagia.mp3", loadedFilee);
	sonidoArm = loadSound("sonidos/muereAra.mp3", loadedFilee);
	aranitasSon = loadSound("sonidos/arañitasRecortar.mp3", loadedFilee);
	chanMiedo = loadSound("sonidos/miedoEscena.mp3", loadedFilee);
	chatSound = loadSound("sonidos/clickChat.mp3", loadedFilee);
	gemaSound = loadSound("sonidos/gemaEffect.mp3", loadedFilee);
	pasosPiedra = loadSound("sonidos/pasosPiedra.wav", loadedFilee);
	tada = loadSound("sonidos/Tada.wav", loadedFilee);
	heartB = loadSound("sonidos/hearth.mp3", loadedFilee);

	getAudioContext().resume();
	botonCargarJuego.remove();
}

function loadedFilee(){
	counterFiles++;
}
function cargarImagenAr(arrName, fileName, index){
	loadImage(fileName, fileloaded);
	function fileloaded(imagen){
		arrName[index] = (imagen);
		counterFiles++;
	}
}

function draw() {
	if(cargarJuego){
		if(counterFiles == totalFiles){
			loading = false;
		}
		if(loading){
			push();
			loadingScreen();
			pop();
		} else {
			if(!startGame){
				PresentacionGame();
			}else if(karla.alive() && startGame){
				push();
				translate(500, 0);
				if(escena === 0){
					fondo();
				}else if(escena === 1){
					bosque();
				} else if (escena === 2){
					casa();

				}
				karla.update();
				karla.show();
				karla.vida();
				pop();
			}else	if(!karla.alive()){
				stopMoving = true;
				GameOver();
			}
		}
	}
}

function keyPressed(){
	karla.mecanicasPres();
	//solo disparos en lugares peligrosos !!
	if(keyCode === 32 && zonaDePeligro){
		disparos.push(new Disparo(karla));
		disparosSon.setVolume(0.6);
		disparosSon.play();
	}
	if(keyCode === 13){
		mensaje++;
		chatHabilitado = true;
	}
}

function keyReleased(){
	karla.mecanicasUnpres();
}

function condicionesIniciales(escenna){
	karla = new Karla();
	dany = new Dany();
	//enemigos
	zonaDePeligro = false;
	araña = new Spider();
	indexSpider = 0;
	xarañitas = 550;
	yarañitas = height - 65;
	xarañitasact = 0;
	xa = 500;
	xb = -500;
	ataques.push(new Tela(karla.x));
	for(var i = 0; i < 40; i++){
		randomPuntos.push(new partAire);
	}
	mensaje = 0;
	contadorImagenes = 0;

	//loading screen variablesss
	diametro = 200;
  flow = 0.5;
  angleFl = 1;

	//sol variables
	grandez = 0;
	plus = 1;
	xsol = 0;

	//
	//Gema variables
	xgema = 0;
	ygema = 125;
	gemaGravedad = 0;
	gemaObtenida = false;
	gemaEntregada = false;
	opacidad = 0;


	//fin del juego !
	finalFelizDisp = false;
	mostrarFin = false;

	//variables de gameOver
	ang = 0;
	rot = 1;
	x = 0;
	ancho = 0;
	karlaquegira = new karlarotation();
	showButon = false;

	//var !startGame
	showMenuDif = false;
	showControles = false;
	//

	//sound variables
	peligro = false; //audio araña
	casaLoop = true;
	bosqueLoop = true;
	aranitaProx = true;
	arMuer = true;
	pisadasLoop = true;
	chatHabilitado = false;
	gemaQueCae = true;
	heartBeat = true;
	stopMoving = false;

	//Esto para manejar las escenas mientras desarrollamos
	escena = escenna;

}

function loadingScreen(){
	background(0, 0, 0);
	push();
	stroke(100, 255, 100);
	line(0, 0, 0, height);
	line(width - 1, 0, width - 1, height);
	line(0, 0, width, 0);
	line(0, height - 1, width, height - 1);
	pop();
	push();
  translate(500, 0);
  diametro+= flow;
  angleFl+= 0.2;
  if(diametro > 270 || diametro < 175){
    flow *= -1;
  }
  image(loadingImg, 0, 325, diametro, diametro);
  push();
  translate(0, 325);
  rotate(angleFl/8);
  stroke(0, 0, 250);
  fill(0, 170, 250, 100);
  ellipse(diametro - 50, 0, 10);
  ellipse(-diametro + 50, 0, 10 + diametro/7);
  pop();
  pop();
  stroke(255);
  push();
  translate(50, 600);
  push();
  rotate(angleFl);
  line(0, -20, 0, 20);
  fill(50, 150, 255, 100);
  line(-20, 0, 20, 0);
  noStroke();
  ellipse(0, 0, 40);
  pop();
  textSize(20);
  fill(255);
  text("Cargando...", 30, 7);
	noFill();
	stroke(250, 50, 105);
	rect(350, 0, 400, 19);
	push();
	rectMode(CORNER);
	noStroke();
	fill(0, 100, 250, 100);
	let wRect = 395 * counterFiles / totalFiles;
	rect(153, -6, wRect, 13);
	pop();
  pop();
}
