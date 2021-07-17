var btn_pink;
var btn_blue;
var btn_yellow;
var btn_lavender;
var btn_mint;
var btn_orange;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  btn_pink=createButton("Pink");
  btn_pink.position(100,50);
  btn_pink.mousePressed(pink_bg);
  btn_blue=createButton("Blue");
  btn_blue.position(200,50);
  btn_blue.mousePressed(blue_bg);
  btn_yellow=createButton("Yellow");
  btn_yellow.position(100,100);
  btn_yellow.mousePressed(yellow_bg);
  btn_lavender=createButton("Lavender");
  btn_lavender.position(200,100);
  btn_lavender.mousePressed(lavender_bg);
  btn_mint=createButton("Mint");
  btn_mint.position(100,150);
  btn_mint.mousePressed(mint_bg);
  btn_orange=createButton("Orange");
  btn_orange.position(200,150);
  btn_orange.mousePressed(orange_bg);
}
function draw() {
  background(r,g,b);
}
function pink_bg(){
  r=255;
  g=153;
  b=153;
}
function blue_bg(){
  r=204;
  g=229;
  b=255;
}
function yellow_bg(){
  r=255;
  g=255;
  b=153;
}
function lavender_bg(){
  r=229;
  g=204;
  b=255;
}
function mint_bg(){
  r=153;
  g=255;
  b=204;
}
function orange_bg(){
  r=255;
  g=204;
  b=153;
}