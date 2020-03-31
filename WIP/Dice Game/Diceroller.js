var dieOne;
var dieTwo;
var dieThree;
var dieFour;
var dieFive;
var face;
let button;
var rollCounter = 0;
var board=[];



function RollDice(){

    return Math.ceil(Math.random() * 6)

}

function setup() {
    createCanvas(650 , 600);
    frameRate(20);
    background('#9f1d35');
    dieOne = new Die(100,500);
    dieTwo = new Die(200,500);
    dieThree = new Die(300,500);
    dieFour = new Die(400, 500);
    dieFive = new Die(500,500);
    var displayOne = new Die(75,50);
    var displaytwo = new Die(75, 100);
    var displayThree = new Die(75, 150);
    var displayFour = new Die(75, 200)
    var displayFive = new Die(75,250);
    var displaySix = new Die(75, 300);
    var displayThreeKind = new Die(350,50);
    var displayFourKind = new Die(350,100);
    var displayHouse = new Die(350,150);
    var displaySmall = new Die(350,200);
    var displayLarge = new Die(350,250);
    var displayFiveKind = new Die(350,300);

   // var increment = 100
    /*for(var i = 0; i < 6; i++){

        board.push(new createButton("position" + i ));
        board[i].size(50,50);
        board[1].position(increment, 500)

        increment = increment + 100

    }
    */
    displayOne.face(1);
    displaytwo.face(2);
    displayThree.face(3);
    displayFour.face(4);
    displayFive.face(5);
    displaySix.face(6);
    displayThreeKind.show();
    displayFourKind.show();
    displayHouse.show();
    displaySmall.show();
    displayLarge.show();
    displayFiveKind.show();
    
    textSize(32);
    fill('black');
    text("3X", 355, 85);
    text("4X", 355, 135)
    text("5X", 355, 335)
    rect(360,175,30,20);
    triangle(355,175,375,155,395,175);
    textSize(14);
    text("Small",358, 220 );
    text('Straight', 351, 244 );
    text("Large",358, 270 );
    text('Straight', 351, 294 );

    Layout();

    button = createButton("Roll!");
    button.mouseClicked(function(){console.log(RollDice())});
    button.size(200,75)
    button.position(75,375);
    button.style("font-family", "Bodoni");
    button.style("font-size", "48px");


    
    
    face = 1;
    dieOne.face(face);
    dieTwo.face(face);
    dieThree.face(face);
    dieFour.face(face);
    dieFive.face(face);


    var score = {

        posOne:0,
        posTwo:0,
        posThree:0,
        posFour:0,
        posFive:0,
        posTotal:0
    };
}
  
  function draw() {

   //mousePressed();
    
    button.mouseClicked(


        function(score){

            if(rollCounter > 2){
                rollCounter = 0;

                dieOne.isSelected = false;
                dieTwo.isSelected = false;
                dieThree.isSelected = false;
                dieFour.isSelected = false;
                dieFive.isSelected = false;
                

            }

            score.posOne = RollDice();
            score.posTwo = RollDice();
            score.posThree = RollDice();
            score.posFour = RollDice();
            score.posFive = RollDice();
            score.posTotal = 0;
            
            dieOne.face(score.posOne);
            dieTwo.face(score.posTwo);
            dieThree.face(score.posThree);
            dieFour.face(score.posFour);
            dieFive.face(score.posFive);

            rollCounter= rollCounter +1;


        }

    )

    
    
  

  }

  function Layout(){
    var x,y;

    x = 75 + 50 + 15;
    y = 50; 
    for( var i = 0; i < 12; i++){

        if (i == 6 ){

            x = 350 + 50 + 15
            y = 50

        }

        fill('white');
        noStroke();
        rect(x,y, 75, 49);

        y = y + 50;

    }

  }

  function mousePressed(){

    dieOne.SelectDie();
    dieTwo.SelectDie();
    dieThree.SelectDie();
    dieFour.SelectDie();
    dieFive.SelectDie();




  }
