function Bullet(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;

    let img = loadImage('assets/rocket.png');
    this.show = function () {
        image(img, this.x - this.size / 2, this.y, this.size, this.size);

    }

    this.update = function (source) {
        if(source === 1){
            this.y -= 4;
        }else{
            this.y += 4;
        }
    }

    this.collision = function (invaders) {
        for (let i = 0; i < invaders.length; i++) {
            if (this.x - this.size / 2 <= (invaders[i].x + invaders[i].size / 2) &&
                this.x + this.size / 2 >= (invaders[i].x - invaders[i].size / 2) &&
                this.y < (invaders[i].y + invaders[i].size / 2) &&
                this.y > (invaders[i].y - invaders[i].size / 2)) {

                invaders[i].size -= 0.5;
                if (invaders[i].size < 20) {
                    invaders.splice(i, 1);
                    if (invaders.length == 0) {
                        console.log("You win!!");
                    }
                }
            }
        }
    }
}  