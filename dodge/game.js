var isGameOver;
var player;
var playerImage;
var enemy;
var enemy2;
var enemy3;
var enemy4;
var enemyImage;
var backgroundImage;
var score=0;
var speed=3;
//var boolean=true;

function preload() 
{
  playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
  enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
  backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}

function setup() 
{
  isGameOver = false;
  createCanvas(400,400);
  player = createSprite(width / 2, height-75, 0, 0);
  player.addImage(playerImage);
  enemy = createSprite(width / 2, 0, 0, 0);
  enemy.addImage(enemyImage);
  enemy.rotationSpeed = 4.0;
  enemy2 = createSprite(0, height-50, 0, 0);
  enemy2.addImage(enemyImage);
  enemy2.rotationSpeed = 4.0;
  enemy3 = createSprite(400, height-200, 0, 0);
  enemy3.addImage(enemyImage);
  enemy3.rotationSpeed = 4.0;
  enemy4 = createSprite(width / 2, 0, 0, 0);
  enemy4.addImage(enemyImage);
  enemy4.rotationSpeed = 4.0;
}
function draw() 
{
  if (isGameOver) 
  {
    gameOver();
  } 
  else 
  {
    text("Round: "+speed-2, width/2, height-30);
    //for (boolean=true;boolean=true;boolean=false)
    //{
    //score=0;
    //boolean=false;
    //}
    score++;
    if (enemy.overlap(player)) 
    {
      isGameOver = true;
    }
    if (enemy.overlap(player)) 
    {
      gameOver();
    }
    if (enemy2.overlap(player)) 
    {
      isGameOver = true;
    }
    if (enemy2.overlap(player)) 
    {
      gameOver();
    }
    if (enemy3.overlap(player)) 
    {
      isGameOver = true;
    }
    if (enemy3.overlap(player)) 
    {
      gameOver();
    }
    if (enemy4.overlap(player)) 
    {
      isGameOver = true;
    }
    if (enemy4.overlap(player)) 
    {
      gameOver();
    }
    background(backgroundImage);
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) 
    {
      player.position.x += 6;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) 
    {
      player.position.x -= 6;
    }
    if (keyDown(UP_ARROW) && player.position.y > (playerImage.width / 2)) 
    {
      player.position.y -= 6;
    }
    if (keyDown(DOWN_ARROW) && player.position.y < (width - (playerImage.width / 2))) 
    {
      player.position.y += 6;
    }
    if (score>300*speed)
    {
      speed++;
    }
    enemy.position.y = enemy.position.y + speed;
    if (enemy.position.y > height) 
    {
      enemy.position.y = 0;
      enemy.position.x = random(5, width - 5);
      if (enemy.position.x > height) 
      {
      enemy.position.y = 0;
      enemy.position.x = random(5, width - 5);
      }
    }
    enemy2.position.x = enemy2.position.x + speed;
    if (enemy2.position.x > height) 
    {
      enemy2.position.x = 0;
      enemy2.position.y = random(height - 5, 5);
      if (enemy2.position.y > height) 
      {
      enemy2.position.x = 0;
      enemy2.position.y = random(height-5,5);
      }
    }
    enemy3.position.x = enemy3.position.x - speed;
    if (enemy3.position.x <0) 
    {
      enemy3.position.x = 400;
      enemy3.position.y = random(height - 5, 5);
      if (enemy3.position.y<0) 
      {
      enemy3.position.x = 400;
      enemy3.position.y = random(height-5,5);
      }
    }
    enemy4.position.y = enemy4.position.y - speed;
    if (enemy4.position.y < 0) 
    {
      enemy4.position.y = height;
      enemy4.position.x = random(5, width - 5);
      if (enemy4.position.x < 0) 
      {
      enemy4.position.y = height;
      enemy4.position.x = random(5, width - 5);
      }
    }
    drawSprites();
  }
}

function gameOver() 
{
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width / 2, height / 2);
  text("Click anywhere to try again", width / 2, 3 * height / 4);
  text("score: "+score,width/2, 5*height/8);
}

function mouseClicked() 
{
  isGameOver = false;
  player.position.x = width / 2;
  player.position.y = height - 75;
  enemy.position.x = width / 2;
  enemy.position.y = 0;
  enemy2.position.x = 0;
  enemy2.position.y = height-50;
  enemy3.position.x = 400;
  enemy3.position.y = height-270;
  enemy4.position.x = width/2 -65;
  enemy4.position.y = height;
}
