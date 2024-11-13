let flies = [];
let flySprite;
let imgBackdrop

function preload(){
  flySprite = loadImage("fly.png");
  imgBackdrop = loadImage("basket.webp");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  image(imgBackdrop, 0, 0, 400, 400);

  if (mouseIsPressed) {
    flies.push(new Fly(mouseX, mouseY));
  }
  for (let i = flies.length - 1; i >= 0; i--) {
    flies[i].display();
    if (flies[i].x < 0 || flies[i].x > width || flies[i].y < 0 || flies[i].y > height) {
      flies.splice(i, 1);
    }
  }
}

class Fly {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
  }

  display() {
    noStroke();
    fill(0);
    image(flySprite, this.x, this.y, 20, 20);
    this.x += this.speedX;
    this.y += this.speedY;
  }
}