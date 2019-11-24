let efe;
let matriz1=[
    [0,0,1,1,1,1,1,1],
    [1,1,2,2,1,1,1,1],
    [1,1,1,1,2,1,1,1],
    [0,0,0,0,0,0,0,0],
    [2,2,2,1,1,1,1,1],
    [1,1,1,1,2,2,1,1],
];
let matriz2=[
    [1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
];

function setup(){
    var canvaDiv = document.querySelector("#canvas");

    var width = canvaDiv.offsetWidth;
    var height = canvaDiv.offsetHeight;
    var x1 = (width/2)-340
    var x2 = (width/2)+20

    var canvas = createCanvas(width,height);
    canvas.parent('canvas');

    efe= new Esfera(40,40,3);

    esferas=[];
    for(let i=0; i<6; i++){
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
    for(let i=0; i<6; i++){
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
    background(0);
   // efe.pintar();
    for(let i=0; i<esferas.length; i++){
        esferas[i].pintar();
    }
    console.log(esferas);
}

class Esfera{
    constructor(x,y,index){
        this.x=x;
        this.y=y;
        this.index=index;
        this.tamano=36;
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
        if(d<36 && this.index != 2){
            this.tamano=40;
        }else{
            this.tamano=36;
        }
        ellipse(this.x,this.y,this.tamano,this.tamano);
    }

}

