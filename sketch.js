//som
let mariotrilha;

//imagens
let fundo;

let colidiu= false;



let xBolinha = 200;
let yBolinha = 200;
let diametro = 22;
let raio = diametro /2;

//variaveis da raquete
let xRaquete = 7;
let yRaquete = 200;
let Rcomprimento = 10;
let Raltura = 80;

//variaveis do oponente
let xRoponente = 585;
let yRoponente = 150;
let velocidadeOponente;


let VxBolinha = 3;
let VyBolinha = 3.5;

function preload(){
 
 fundo = loadImage("download (1).jfif");
  mariotrilha = loadSond("som/01. Ground Theme.mp3");
 
}
 




function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(fundo);
  bolinha();
  movimentoBolinha();
  colisaoBolinha();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRoponente,yRoponente);
  movimentaRaquete();
  movimentoRoponente();
  bateuBolinhaRaquete(xRaquete,yRaquete);
  bateuBolinhaRaquete(xRoponente,yRoponente);
}

function bolinha (){
  let b = color (128,128,128)
  fill(b);
  circle(xBolinha, yBolinha, diametro);
}
function movimentoBolinha(){
 
xBolinha += VxBolinha;
   yBolinha += VyBolinha;
}

function colisaoBolinha(){
 
 
  if(xBolinha + raio > width || xBolinha - raio < 0 ){
     VxBolinha *= -1;
  }
 
  if(yBolinha + raio > height || yBolinha - raio < 0){
     VyBolinha *= -1;
   
  }
}


function mostraRaquete(x,y){
   let r = color (192,192,192)
  fill(r);
  rect(x,y,Rcomprimento, Raltura);
}
function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
   
    yRaquete -= 3;
   
  }
  if(keyIsDown(DOWN_ARROW)){
   
    yRaquete += 3;
  }
   
}

function movimentoRoponente() {
   velocidadeOponente =  yBolinha - yRoponente  - Rcomprimento / 2 - 30;
    yRoponente += velocidadeOponente;
}
 

function bateuBolinhaRaquete(x,y){
 
  colidiu = collideRectCircle(
  xRaquete, yRaquete, Rcomprimento,
   Raltura, xBolinha,yBolinha,raio
  );
  if(colidiu){
     
    VxBolinha *= -1;
     
     }

}

function incluirPontos(){
  fill(255);
  text(meusPontos,278,26);
  text(pontosOponemte,321,26);
}

