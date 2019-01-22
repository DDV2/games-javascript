class Disparo{
	constructor(disparador){
		this.x = disparador.x;
		this.y = disparador.y - 75;
		this.rc = floor(random(2));
		this.history = [];

	}

	update(){
		this.y-=6;
		this.x+= random(-1,1);
		let v = createVector(this.x, this.y);
		this.history.push(v);
		if(this.history.length > 6){
			this.history.splice(0, 1);
		}
	}
	show(){
		push();
		noStroke();
		if(this.rc < 1){
			fill(23, 221, 229, 150);
		} else if(this.rc < 2){
			fill(129, 17, 209, 150);
		}
		ellipse(this.x, this.y, 40);
		stroke(155);
		fill(50);
		for(var i = 0; i < this.history.length; i++){
			let pos = this.history[i];
			ellipse(pos.x, pos.y, i * 3);
		}
		pop();
	}

}
