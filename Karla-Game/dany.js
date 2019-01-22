class Dany{
  constructor(){
    this.x = 300;
    this.y = height - 65;
    this.r = 31.25;
    this.dannImg = 0;
    this.contento = false;
    this.piropo = false;
  }

  show(karla){
    push();
    fill(0, 0, 255);
    pop();
    if(!this.contento){
      if(karla.x > this.x - 80 && karla.x < this.x - 20 && karla.der && !gemaObtenida){

        if(mensaje === 1){
          if(chatHabilitado){
            chatSound.play();
            chatHabilitado = false;
          }
        push();
        noStroke();
        fill(0, 200);
        rect(283, 410, 300, 200);
        fill(250, 50, 100, 100);
        rect(283, 410, 280, 180);
        fill(0);
        rect(283, 410, 250, 160);
        textSize(20);
        fill(255);
        text("Oí rumores de que una gema", 150, 380);
        text("magica se escondide en lo mas", 144, 410);
        text("profundo del bosque...", 184, 440);
        pop();
        karla.x = this.x - 70;
        this.dannImg = 1;
      } else if (mensaje === 2){
        if(chatHabilitado){
          chatSound.play();
          chatHabilitado = false;
        }
        push();
        noStroke();
        fill(0, 200);
        rect(283, 410, 300, 200);
        fill(250, 50, 100, 100);
        rect(283, 410, 280, 180);
        fill(0);
        rect(283, 410, 250, 160);
        textSize(20);
        fill(255);
        text("Me pregunto si ... Neh.", 180, 380);
        text("No lo creo, deben ser puros", 154, 410);
        text("puros cuentos... O no ?", 184, 440);
        pop();
        karla.x = this.x - 70;
        this.dannImg = 2;
      } else if(mensaje === 3){
        if(chatHabilitado){
          chatSound.play();
          chatHabilitado = false;
        }
        push();
        noStroke();
        fill(0, 200);
        rect(283, 410, 300, 200);
        fill(250, 50, 100, 100);
        rect(283, 410, 280, 180);
        fill(0);
        rect(283, 410, 250, 160);
        textSize(20);
        fill(255);
        text("Que lastima, creo que le vendria", 143, 400);
        text("bien a mi colección", 204, 430);
        pop();
        karla.x = this.x - 70;
      } else if (mensaje === 4){
        if(chatHabilitado){
          chatSound.play();
          chatHabilitado = false;
        }
        this.dannImg = 0;
      }
    }else if(karla.x > this.x - 80 && karla.x < this.x - 20 && karla.der && gemaObtenida){
      if(mensaje === 1){
        if(chatHabilitado){
          chatSound.play();
          chatHabilitado = false;
        }
        push();
        noStroke();
        fill(0, 200);
        rect(283, 410, 300, 200);
        fill(250, 50, 100, 100);
        rect(283, 410, 280, 180);
        fill(0);
        rect(283, 410, 250, 160);
        textSize(20);
        fill(255);
        text("Eso es ... Esa es la gema !!??", 150, 380);
        text("Existe ! Y la encontraste !!", 170, 410);
        text("Es realmente hermosa.", 184, 440);
        pop();
        karla.x = this.x - 70;
        this.dannImg = 3;

      } else if (mensaje === 2){
        if(chatHabilitado){
          chatSound.play();
          chatHabilitado = false;
        }
        push();
        noStroke();
        fill(0, 200);
        rect(283, 410, 300, 200);
        fill(250, 50, 100, 100);
        rect(283, 410, 280, 180);
        fill(0);
        rect(283, 410, 250, 160);
        textSize(20);
        fill(255);
        text("Que...? Enserio me la regalas?", 145, 400);
        text("Para mi coleccion?", 204, 430);
        pop();
        karla.x = this.x - 70;
        this.dannImg = 4;
        gemaEntregada = true;
      } else if (mensaje === 3){
        this.contento = true;
        tada.play();
      }
    }else {mensaje = 0;
      this.dannImg = 0;
    }
  } else {
    if(!this.piropo){

      this.dannImg = 5;
      push();
      noStroke();
      fill(0, 200);
      rect(300, 417, 200, 70);
      fill(250, 50, 100, 100);
      rect(300, 417, 180, 70);
      fill(0);
      rect(300, 417, 150, 70);
      textSize(30);
      fill(255);
      text("¡*Gracias*!", 227, 427);
      pop();
      finalFelizDisp = true;
    } else {
      if(heartBeat){
        heartB.loop();
        heartBeat = false;
        stopMoving = true;
      }
      push();
      noStroke();
      fill(0, 200);
      rect(290, 461, 240, 40);
      fill(250, 50, 100, 100);
      rect(290, 461, 230, 20);
      textSize(20);
      fill(255);
      text("Hmm., vos sos mas linda.", 176, 467);
      pop();
    }
 }
    image(danyImages[this.dannImg], this.x, this.y - 47, 150, 150);

  }

}
