let efe;
let matriz1=[
    [0,0,1,1,1,1,1,1],
    [1,1,2,2,1,1,1,1],
    [0,0,0,0,0,0,0,0],
    [2,2,2,1,1,1,1,1],
    [1,1,1,1,2,2,1,1],
];
let matriz2=[
    [1,1,1,1,1,1,0,0],
    [1,1,2,2,2,2,1,1],
    [0,0,0,0,0,0,0,0],
    [2,2,2,2,1,1,1,1],
    [1,1,1,1,1,1,1,1],
];

function setup(){
    var canvaDiv = document.querySelector("#canvas");

    var width = canvaDiv.offsetWidth;
    var height = canvaDiv.offsetHeight;
    var x1 = (width/2)-340;
    var x2 = (width/2)+20;

    var canvas = createCanvas(width,height);
    canvas.parent('canvas');

    efe= new Esfera(40,40,3);

    esferas=[];
    for(let i=0; i<5; i++){
        for(let j=0; j<8; j++){
            value1=matriz1[i];
            value2=value1[j];
            if(value2 == 1){
                esferas.push(new Esfera(x1+(j*40),40+(i*40),1));
            }
            if(value2 == 2){
                esferas.push(new Esfera(x1+(j*40),40+(i*40),2));
            }
        }   
    }
    for(let i=0; i<5; i++){
        for(let j=0; j<8; j++){
            value1=matriz2[i];
            value2=value1[j];
            if(value2 == 1){
                esferas.push(new Esfera(x2+(j*40),40+(i*40),1));
            }
            if(value2 == 2){
                esferas.push(new Esfera(x2+(j*40),40+(i*40),2));
            }
        }   
    }
}
    
function draw() {

    var canvaDiv = document.querySelector("#canvas");

    var width = canvaDiv.offsetWidth;
    var x1 = (width/2)-340;
    var x2 = (width/2)+20;

    background(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255);
    text("A",40,45+(0*40));
    text("B",40,45+(1*40));
    text("C",40,45+(3*40));
    text("D",40,45+(4*40));

    text("A",width-40,45+(0*40));
    text("B",width-40,45+(1*40));
    text("C",width-40,45+(3*40));
    text("D",width-40,45+(4*40));

    text("1",x1+(0*40),30+(6*40));
    text("2",x1+(1*40),30+(6*40));
    text("3",x1+(2*40),30+(6*40));
    text("4",x1+(3*40),30+(6*40));
    text("5",x1+(4*40),30+(6*40));
    text("6",x1+(5*40),30+(6*40));
    text("7",x1+(6*40),30+(6*40));
    text("8",x1+(7*40),30+(6*40));

    text("9",x1+(9*40),30+(6*40));
    text("10",x1+(10*40),30+(6*40));
    text("11",x1+(11*40),30+(6*40));
    text("12",x1+(12*40),30+(6*40));
    text("13",x1+(13*40),30+(6*40));
    text("14",x1+(14*40),30+(6*40));
    text("15",x1+(15*40),30+(6*40));
    text("16",x1+(16*40),30+(6*40));

   // efe.pintar();
    for(let i=0; i<esferas.length; i++){
        esferas[i].pintar();
    }
}
function mouseClicked() {
    for(let i=0; i<esferas.length; i++){
        esferas[i].elegir();
    }

}
class Esfera{
    constructor(x,y,index){
        this.x=x;
        this.y=y;
        this.index=index;
        this.tamano=36;
        this.over=false;
    }

    pintar(){
        switch(this.index){
            case 1:
                fill(255);
            break;
            case 2:
                fill(107);
            break;
            case 3:
                fill(255,44,31);
            break;
        }
        let d= dist(mouseX,mouseY,this.x,this.y);

        if(d<20 && this.index != 2){
            this.tamano=40;
        }else{
            this.tamano=36;
            this.over=true;
        }
        ellipse(this.x,this.y,this.tamano,this.tamano);
    }

    elegir(){
        let d= dist(mouseX,mouseY,this.x,this.y);
        if(d<20){
            switch(this.index){
                case 1:
                    this.index=3;
                break;
                case 3:
                    this.index=1;
                break;
            }
        }
   
    }

}

