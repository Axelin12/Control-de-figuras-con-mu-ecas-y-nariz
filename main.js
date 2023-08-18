noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function preload(){

}
function setup(){
  video=createCapture(VIDEO);
  video.size(550,400);
  video.position(100,150);
  canvas=createCanvas(550,400);
  canvas.position(800,150);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotposes);
}
function gotposes(results){
   if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
console.log("nariz X"+noseX);
noseY=results[0].pose.nose.y;
console.log("nariz Y"+noseY);
leftWristX=results[0].pose.leftWrist.x;
console.log("muñecaIzquierda X"+leftWristX);
rightWristX=results[0].pose.rightWrist.x;
console.log("muñecaDerecha X"+rightWristX);
difference=floor(leftWristX-rightWristX);
console.log("lado: "+ difference);
   }
}
function modelLoaded(){
    console.log("el modelo ya esta listo");
}

function draw(){
background("green");
//document.getElementById("square_side").innerHTML="EL lado del cuadrado es = "+ difference+"px";
document.getElementById("square_side").innerHTML="El radio del circulo es = "+ difference+ "px";
fill('#A0FF04');
stroke('#74B974');
//square(noseX,noseY, difference);
circle(noseX,noseY,difference);
}
