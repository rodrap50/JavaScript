
let currentDate;
let currentTime;
let stringTime;
let newNum = 0;
let hex1;
let hex2;
let newColor
let yPos = 0;
let cirColor;
let y;
let x; 

function decimalToHexString(number)
      {
        if (number < 0)
        {
          number = 0xFFFFFFFF + number + 1;
        }
        console.log(number);
        
        this.z = number.toString(16).toUpperCase();
  
        while (this.z.length < 6){
           
          this.z = "0" + this.z;
          
        }
        
        return this.z;
      }


function setup() {
  createCanvas(windowWidth, windowHeight)
  //frameRate(5);
  //circ = new Shade();
  textSize(72);
  textAlign(CENTER);
  fill('white');
  stroke('white');
 

}

function draw() {
  
  currentDate = new Date();
  currentTime = currentDate.getTime();
  //console.log(currentTime);
  //stringTime = currentTime.toString(16);
  //hexTime = "#" + (stringTime).substring(3);
  hex1 = "#" + (currentTime.toString(16)).substring(3)
  hex2 = "#" + ((currentTime+999999).toString(16)).substring(3)
  
  newNum = Math.floor(Math.random() *16777000);
  x = currentDate.getHours().toString().padStart(2,"0") + ":" + currentDate.getMinutes().toString().padStart(2,"0") +  ":" + currentDate.getSeconds().toString().padStart(2,"0") + ":" + currentDate.getMilliseconds().toString().substring(0,2).padStart(2,"0");
  y = decimalToHexString(newNum+500)
  z = currentDate.getHours().toString().padStart(2,"0") + currentDate.getMinutes().toString().padStart(2,"0") + currentDate.getSeconds().toString().padStart(2,"0");// + currentDate.getMilliseconds().toString().substring(0,2).padStart(2,"0");
  var z1 =currentDate.getMinutes().toString().padStart(2,"0") + currentDate.getSeconds().toString().padStart(2,"0") + currentDate.getMilliseconds().toString().substring(0,2).padStart(2,"0");
  
  
  console.log(x);
  console.log("#"+y);
  
  background("#"+z);
  
  console.log(Math.floor(windowWidth / 2));
  console.log(Math.floor(windowHeight / 2)); 

  
  fill("#"+z1);
  noStroke();
  ellipse( width / 2,height / 2, 600);
  
  fill('White');
  text(x,Math.floor(outerWidth / 2), 80);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}