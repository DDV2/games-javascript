class Karla{
	constructor(){
		this.x = 0;
		this.y = height - 65;
		// this.r = 31.25;
		this.r = 18;
		this.xvelocidad = 0;
		this.yvelocidad = 1;
		//para el colorcito
		this.daño;

		this.movi = false;
		this.izq = false;
		this.der = true;
		this.disparando = false;
		this.sentada = false;
		//contador de vidas
		this.vidas = 5;
	}

	update(){
		if(!this.sentada){
			this.x += this.xvelocidad * 4;
			this.y += this.yvelocidad * 7;
		}
		if(this.movi && !(frameCount % 5)){
			contadorImagenes = (contadorImagenes + 1) % karlaIzq.length;
		}

		//controla el numero de escena
		if(this.x > width/2 + this.r){
			escena++;
			this.x =-width/2 + this.r;
			this.xvelocidad = 0;
			this.movi = false;
			contadorImagenes = 0;
			pastoP.stop();
			pasosPiedra.stop();
		} else if(this.x < -width/2 -this.r && !gemaEntregada){
			escena--;
			this.x = width/2 - this.r;
			this.xvelocidad = 0;
			this.movi = false;
			contadorImagenes = 0;
			pastoP.stop();
			pasosPiedra.stop();
		}

		// if(escena === 2 ){
		// 		bosqueLoop = true;
		// 		if(casaLoop){
		// 			vientoF.loop();
		// 			casaLoop = false;
		// 		}
		// 		if(vientoB.isPlaying){
		// 				vientoB.stop();
		// 		}
		// } else if(escena === 1){
		// 	aranitaProx = true;
		// 	peligro = false;
		// 	casaLoop = true;
		// 	if(bosqueLoop){
		// 		vientoB.loop();
		// 		bosqueLoop = false;
		// 	}
		// 	if(vientoF.isPlaying){
		// 		vientoF.stop();
		// 	}
		// 	if(miedoEs.isPlaying){
		// 		miedoEs.stop();
		// 	}
		// } else if(escena === 0){
		// 	if(vientoB.isPlaying){
		// 		vientoB.stop();
		// 	}
		// 	bosqueLoop = true;
		// }



		//controla cuando la escena esta al maximo o minimo, que no siga caminando
		if(this.x > 330 - this.r && escena === 2){
			this.x = 330 - this.r;
			contadorImagenes = 0;
		} else if (this.x < -width/2 + this.r && escena === 0){
			this.x = -width/2 + this.r;
			contadorImagenes = 0;
			pastoP.stop();
		}
		if(gemaEntregada){
			if(this.x < -width/2 + this.r){
				this.x = -width/2 + this.r;
				mostrarFin = true;
			}
		}

		//aplica "gravedad" y controla que no se vaya al infierno xd
		if(this.y > height - 65){
			this.y = height - 65;
		} else if (this.y < height - 160){
			this.yvelocidad = 1;
		}

		//zona de peligro
		if(this.x < 0 && escena === 0){
			zonaDePeligro = true;
		}
	}

	show(){
		push();
		if(this.sentada){
		   image(karlaSentada, this.x, this.y - 47, 150, 150);
			 this.x = 298;
			 this.y = 585;
			 dany.piropo = true;
			 mostrarFin = true;
		} else if(this.disparando){
			image(karladispara, this.x, this.y -38, 112, 143);
			if(this.movi && !(frameCount % 7)){
				this.disparando = false;
			}
			if(!(frameCount % 25)){
				this.disparando = false;
			}

		}else if(this.izq){
			image(karlaIzq[contadorImagenes], this.x, this.y - 35, 100, 120);
		} else if (this.der){
			image(karlaDer[contadorImagenes], this.x, this.y - 35, 100, 120);
		}
		pop();

	}

	vida(){
		if(escena!=2){
			for(var i = 0; i < this.vidas; i++){
				fill(255, 0, 0);
				noStroke();
			 	image(corazones, -470 + 40 * i, 20, 30, 30);
			}
		} else {
			this.vidas = 5;
		}

	}

	alive(){
		if(this.vidas < 1){
			return false;
		} else {return true;}
	}

	check(px, py){
		if(px < this.x + this.r && px > this.x - this.r && py < this.y + this.r + 10 && py > this.y - this.r - 73){
			this.vidas--;
			this.daño = true;
			return true;
		} else { this.daño = false; }
	}

	mecanicasPres(){
		pastoP.rate(2);
		pastoP.setVolume(0.15);
		//hace que se mueva a la izquierda y derecha :3
		if(keyCode === 40 && finalFelizDisp && this.x > 285){
			this.sentada = true;
		}
		if(keyCode === 37){
			if(escena!= 2 && pisadasLoop && !stopMoving){
				pastoP.loop();
				pisadasLoop = false;
			} else if(escena === 2 && pisadasLoop && startGame && !stopMoving){
				pasosPiedra.rate(1.4);
				pasosPiedra.setVolume(0.5);
				pasosPiedra.loop();
				pisadasLoop = false;
			}
			this.xvelocidad = -1;
			this.movi = true;
			this.izq = true;
			this.der = false;
		} else if (keyCode === 39){
			if(escena!= 2 && pisadasLoop && !stopMoving){
				pastoP.loop();
				pisadasLoop = false;
			} else if(escena === 2 && pisadasLoop && startGame && !stopMoving){
				pasosPiedra.rate(1.4);
				pasosPiedra.setVolume(0.5);
				pasosPiedra.loop();
				pisadasLoop = false;
			}
			this.xvelocidad = 1;
			this.movi = true;
			this.izq = false;
			this.der = true;
		}
		//hace que "salte"
		if(keyCode === 38 && startGame){
			this.yvelocidad = -1;
		}
		if(keyCode === 32 && zonaDePeligro){
			this.disparando = true;
		}
	}

	mecanicasUnpres(){
		//suelta la tecla, deja de moverse
		if(keyCode!= 38 && keyCode!= 32){
			this.xvelocidad = 0;
			this.movi = false;
			contadorImagenes = 0;
		}
		if(keyCode!= 38 && keyCode!= 32){
			pastoP.stop();
			pasosPiedra.stop();
		}
		pisadasLoop = true;
	}

}
