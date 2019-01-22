class Spider{
  constructor(){
    this.x = 0;
    this.y = 150;
    this.vidas = 10;
  }

  show(){
    image(spiderImages[indexSpider], this.x, this.y + 29, 380, 380);

    if(arMuer && this.vidas < 0.25){
      sonidoArm.rate(2);
      sonidoArm.play();
      arMuer = false;
    }
  }

  check(px, py){
    if(px > this.x - 20 && px < this.x + 20 && py < this.y - 20){
      this.vidas-= dificultad;
      magiaGolpe.setVolume(0.5);
      magiaGolpe.play();
      indexSpider = 1;
      return true;
    }
  }

  despierta(){
    //vidas
    for(var i = 0; i < this.vidas; i++){
      image(vidaAra, 230 + i * 27, 20, 30, 30);
    }
    indexSpider = 0;
  }

  muerta(){
    if(this.vidas < 0.25){
      return true;
    } else { return false; }
  }

}


function pequeñasArañas(){
  //dibuja las arañas
  image(arañita, xarañitas, yarañitas - 20);
  image(arañita2, -xarañitas, yarañitas - 20);

  xarañitas-= xarañitasact;
  //rebotan las arañas, atacan las arañas con esas condiciones. De otra forma, se retiran
  if(zonaDePeligro && !araña.muerta()){
    if(aranitaProx){
      aranitasSon.rate(0.9);
      aranitasSon.play();
      aranitaProx = false;
    }
    yarañitas+= floor(random(-5, 5));
    yarañitas = constrain(yarañitas, height - 80, height - 50);
    xarañitasact = 1;

    if(xarañitas < 440){
      xarañitasact = 0;
      push();
      stroke(220);
      strokeWeight(7);
      line(xa, yarañitas, xa + 20, yarañitas);
      line(xb, yarañitas, xb - 20, yarañitas);
      pop();
      xa-= dificultadTelas;
      xb+= dificultadTelas;
      if(karla.check(xa, yarañitas)|| xa < -550){
        xa = 500;
      }
      if(karla.check(xb, yarañitas) || xb > 550){
        xb = -500;
      }

    }
  }
    if(araña.muerta()){
    xarañitasact = -1;
    if(!aranitaProx){
      aranitasSon.play();
      aranitaProx = true;
    }
      if(xarañitas > 540){
        xarañitasact = 0;
      }
    }
}
