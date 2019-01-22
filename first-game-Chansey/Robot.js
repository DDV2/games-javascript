class Robot {
    constructor(x, y, t){
       this.x = x;
       this.y = y;
       this.t = t;
       this.switcherX = this.x + 25/50 * this.t;
       this.switcherY = this.y - 15/50 * this.t;
       this.switcherRadius = (15/50 *this.t)/2;
       this.state;
       //swicher color
       this.b = 0;
       //roboteyes color
       this.red = 0;
       this.green = 100;
       this.blue = 300;
 
     }
 
    drawRobot(){
 
       if (this.state){
       //changing antenna color
       this.b = 255;
 
       // changing roboteyes color
       this.red = 255;
       this.green = 50;
       this.blue = 0;
       } else {
       //swicher color
       this.b = 0;
       //roboteyes color
       this.red = 0;
       this.green = 100;
       this.blue = 300;
 
       }
 
       //stick of the antenna
       stroke(0, 100, 300);
       line(this.x + 2.5/5 * this.t, this.y + this.t/10, this.x + 2.5/5 * this.t, this.y - 3/5 * this.t);
       //switcher ball turnOn
       stroke(100);
       fill(255, 100, this.b);
       ellipse(this.x + 25/50 * this.t, this.y - 15/50 * this.t, 15/50 *this.t, 15/50 * this.t);
       //robot head
       stroke(0);
       fill(0, 0, 150);
       rect(this.x - this.t/10, this.y + this.t/5, 60/50 * this.t, this.t/5);
       fill(100);
       rect(this.x, this.y, this.t, 4.5/5 * this.t);
       //eyes
       fill(this.red, this.green, this.blue);
       rect(this.x + 9/50 * this.t, this.y + this.t/5, this.t/5, this.t/10);
       rect(this.x + 3.2/5 * this.t, this.y + 1/5 * this.t, this.t/5, this.t/10);
       //mouth
       line(this.x + 1/5 * this.t, this.y + 3/5 * this.t, this.x + 4/5 * this.t, this.y + 3/5 * this.t);

       if(this.state){
           stroke(50, 50, 200);
           line(this.x + 25/50 * this.t, this.y - 15/50 * this.t, 350, 300);
       }
 
     }
 
     checkIt(suicidetryX, suicidetryY){
       let proxToAntenna = dist(suicidetryX, suicidetryY, this.switcherX, this.switcherY);
       if(proxToAntenna < this.switcherRadius ){
         if(!this.state){
           counter ++;
         }
         //making chansey ANGRY ..
         this.state = true;
       }
     }
 }
 