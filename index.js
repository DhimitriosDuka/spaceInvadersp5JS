let bg;
let spaceship;
let bullets = [];
let invaders = [];

function preload(){
    bg = loadImage('space.jpg');
}

function setup() {
    createCanvas(800, 600);
    spaceship = new Spaceship();
    for(let i = 0; i < 12; i++){
        invaders[i] = new Invader(i * 60 + 60, 100);
    }
}

function draw() {
    background(bg);
    spaceship.show();
    spaceship.update();

    for(let i = 0; i < bullets.length; i++){
        bullets[i].show();
        bullets[i].update(1);
        bullets[i].collision(invaders);
        if(bullets[i].y < 0){
            bullets.splice(i, 1);   
        }
       
    }

    for(let i = 0; i < invaders.length; i++){
        invaders[i].show();
        invaders[i].update();
    
        if(invaders[i].x + invaders[i].size / 2 > width || invaders[i].x - invaders[i].size / 2< 0){
            for(let j = 0; j < invaders.length; j++){
                invaders[j].shiftDown();
            }
        }
      
    } 
}

function keyPressed(){
    if(key === ' '){
        let b = new Bullet(spaceship.x, spaceship.y);
        bullets.push(b);
    }
}
