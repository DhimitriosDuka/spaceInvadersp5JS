function Spaceship(){

    this.x = width / 2;
    this.y = 0.85 * height;
    this.size = 80;
    let img = loadImage('assets/spaceship.png');

    this.show = function(){
        image(img, this.x - this.size / 2, this.y, this.size, this.size);
    }

    this.update = function(){
        if(keyIsDown(LEFT_ARROW) && this.x > this.size / 2){
            this.x -= 5;
        }

        if(keyIsDown(RIGHT_ARROW) && this.x < width - this.size / 2){
            this.x += 5;
        }
    }

}