var dog,dogimg,happydogimg,database,foods,foodstock;
var database,food1;
function preload()
{
 happydogimg = loadImage("dogImg.png");
  dogimg= loadImage("dogImg1.png");
}

function setup() {
  createCanvas(700, 600);
  database = firebase.database();
  dog = createSprite(300,300);
  dog.addImage("dog",dogimg);
  dog.scale =0.5;

  
}

function readStock(data){ 
  foods=data.val(); 
} 
//Function to write values in DB 
function writeStock(x){ 
  if(x <= 0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({ 
    Food:x 
  }) 
} 

function draw() {  
  background("purple");
  
  
  //Function to read values from DB
  if(keyWentDown(UP_ARROW)){ 
    
    dog.addImage("dog",happydogimg); 
  }  
  fill("black");
  textSize(30);
  text("Food Available:" + foods,200,500);
  drawSprites();
  //add styles here
  fill("black");
  textSize(30);
  text("Press the Up Arrow key to feed the Puppy",100,100);
  

}



