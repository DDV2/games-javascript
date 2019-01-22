class Tela{
  constructor(objetivo){
    this.x = 0;
    this.y = 0;

    //define la inclinacion de la tela
    this.lineD = map(objetivo, -width/2, width/2, -2, 2);

  }

  show(){
    push();
    stroke(220);
    strokeWeight(5);
    this.ptx = this.x + 20 * this.lineD;
    this.pty = this.y + 50;
    line(this.x, this.y, this.ptx, this.pty);
    pop();
  }
  update(objetivo){
    this.x+= objetivo.x/75;
    this.y+=8;

  }

}
