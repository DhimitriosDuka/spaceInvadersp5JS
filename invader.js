function Invader(x, y){

    this.x = x;
    this.y = y;
    this.size = 50;
    this.acc = 1;
    this.bullets = [];
    
    let img = loadImage('invader.png');

    this.show = function(){
        image(img, this.x - this.size / 2, this.y, this.size, this.size);

    }

    this.update = function(){
        this.x += 0.5 * this.acc;
    }

    this.shiftDown = function(){
        this.acc *= -1;
        this.y += 15;
        
    }

    this.shoot = function(){
        let bullet = new Bullet(this.x, this.y);
        bullet.show();
        bullet.update();
        bullets.push(bullet);
    }




}
