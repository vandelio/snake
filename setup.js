var snake;
var scl = 20;
var food;
var screenx = window.innerWidth;
var screeny = window.innerHeight;
var frameRateSet = 1;
var defaultFrameRate = 10;

function setup (){
    
    frameRate(10);
    createCanvas(screenx,screeny)
    snake = new Snake();
    pickLocation();
}


function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);
}

function draw(){
    if(document.querySelector('body').classList.contains('running')){
        snake.alive = true;
  
        background(51);
    
        if(snake.eat(food)){
            pickLocation();
        }
        snake.death();
        snake.update();
        snake.show();
        console.log(snake.total)
        if(snake.total > 5){
            setFrameRate(15); 
        }else if(snake.total > 10){
            setFrameRate(20); 
        }else if(snake.total > 20){
            setFrameRate(25); 
        }else if(snake.total > 30){
            setFrameRate(30); 
        }else if(snake.total > 40){
            setFrameRate(35); 
        }else if(snake.total > 50){
            setFrameRate(40); 
        }else if(snake.total > 60){
            setFrameRate(45); 
        }else if(snake.total > 70){
            setFrameRate(50); 
        }else if(snake.total > 80){
            setFrameRate(55); 
        }else if(snake.total > 90){
            setFrameRate(60); 
        }
    
    
        fill(215,159, 42);
        rect(food.x, food.y, scl, scl);
    }
}

function keyPressed(){
    if (keyCode === UP_ARROW && snake.currentdir !== 'down'){
        snake.dir(0,-1);
        snake.currentdir = 'up';
    }else if(keyCode === DOWN_ARROW&& snake.currentdir !== 'up'){
        snake.dir(0,1);
        snake.currentdir = 'down';
    }else if(keyCode === RIGHT_ARROW && snake.currentdir !== 'left'){
        snake.dir(1,0);
        snake.currentdir = 'right';
    }else if(keyCode === LEFT_ARROW && snake.currentdir !== 'right'){
        snake.dir(-1,0);
        snake.currentdir = 'left';
    }
}
