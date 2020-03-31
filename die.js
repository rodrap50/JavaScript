class Die {

        constructor(xCord,yCord){
            this.xCord = xCord;
            this.yCord = yCord;

            this.faceStored;
            this.isSelected = new Boolean(false);

            
            console.log(this.isSelected);
        }

    show(){
        if(this.isSelected == true){

            strokeWeight(2);
            stroke('green');
        
        }
        else{
            strokeWeight(2);
            stroke('black');
        }
        fill('white');
        rect(this.xCord,this.yCord,50,50,5);

        strokeWeight(1);
        stroke('black');


    }
    
    face (counter){
        
        this.show();
        
        if(this.isSelected == true){
            this.counter = this.faceStored;
        }
        else{

            this.counter = counter;
            this.faceStored = this.counter;
    
        }

        switch (this.counter){

            case 1:
                fill('Black');
                circle(this.xCord + 25 , this.yCord + 25, 10);
                break;
            
            case 2:
                fill('Black');
                circle(this.xCord + 10 , this.yCord + 10, 10);
                circle(this.xCord + 40 , this.yCord + 40, 10);
                break;
            case 3:
                fill('Black');
                circle(this.xCord + 10 , this.yCord + 10, 10);
                circle(this.xCord + 25 , this.yCord + 25, 10);
                circle(this.xCord + 40 , this.yCord + 40, 10);
                break;
            case 4:
                fill('Black');
                circle(this.xCord + 10 , this.yCord + 10, 10);
                circle(this.xCord + 10 , this.yCord + 40, 10);
                circle(this.xCord + 40 , this.yCord + 10, 10);
                circle(this.xCord + 40 , this.yCord + 40, 10);
                break;
            case 5:
                fill('Black');
                circle(this.xCord + 10 , this.yCord + 10, 10);
                circle(this.xCord + 10 , this.yCord + 40, 10);
                circle(this.xCord + 25 , this.yCord + 25, 10);
                circle(this.xCord + 40 , this.yCord + 10, 10);
                circle(this.xCord + 40 , this.yCord + 40, 10);
                break;
            case 6:
                fill('Black');
                circle(this.xCord + 10 , this.yCord + 10, 10);
                circle(this.xCord + 10 , this.yCord + 25, 10);
                circle(this.xCord + 10 , this.yCord + 40, 10);
                circle(this.xCord + 40 , this.yCord + 10, 10);
                circle(this.xCord + 40 , this.yCord + 25, 10);
                circle(this.xCord + 40 , this.yCord + 40, 10);
                break;



        }
        


    }

    selected(){


            
            this.face(this.faceStored);

        
        

    }

    GetisSelected(){

        return this.isSelected

    }

    SelectDie(){

        var d = Math.floor( dist(mouseX, mouseY, this.xCord+25, this.yCord+25));
        
        if (d < 25){
            if(this.isSelected == false){

                this.isSelected = true;

            }
            else{
                this.isSelected = false;
            }

            this.face(this.faceStored);

        }


    }

    

    
}