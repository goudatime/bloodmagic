let house;
let afternoon;
let daytime;
let sunset;
let sunrise;
let nighttime;
let devilshour;
let tile;
let door;

function preload() {
  afternoon = loadImage('images/Bloodmagic_afternoon.jpg');
  daytime = loadImage('images/Bloodmagic_daytime.jpg');
  sunset = loadImage('images/Bloodmagic_sunset.jpg');
  sunrise = loadImage('images/Bloodmagic_sunrise.jpg');
  nighttime = loadImage('images/Bloodmagic_nighttime.jpg');
  devilshour = loadImage('images/Bloodmagic_devilshour.jpg');
  house = loadImage('images/Bloodmagic_nobg2.png');
  title = loadImage('images/title.png');
  door = loadImage('images/door.png');
}

function setup() {
  createCanvas(1000, 1000);
  afternoon = loadImage('images/Bloodmagic_afternoon.jpg');
  daytime = loadImage('images/Bloodmagic_daytime.jpg');
  sunset = loadImage('images/Bloodmagic_sunset.jpg');
  sunrise = loadImage('images/Bloodmagic_sunrise.jpg');
  nighttime = loadImage('images/Bloodmagic_nighttime.jpg');
  devilshour = loadImage('images/Bloodmagic_devilshour.jpg');
  house = loadImage('images/Bloodmagic_nobg2.png');


}

function draw() {
  background(0);
    cursor('images/knife4.png');


  imageMode(CENTER);
  image(title, width/2, 160);
  image(afternoon, width/2, height/2);
  image(daytime, width/2, height/2);
  image(sunset, width/2, height/2);
  image(sunrise, width/2, height/2);
  image(nighttime, width/2, height/2);
  image(devilshour, width/2, height/2);
  image(afternoon, width/2, height/2);
  image(house, width/2, height/2);
  image(door,501, 500);
  let h = hour();
  if(h <= 7 || h >= 4) {
   loadImage('images/Bloodmagic_sunrise.jpg');
 }
  else if(h >7 && hr <= 15){
   loadImage('images/Bloodmagic_daytime.jpg');
 }

 else if(hr >15 && hr <=20){
   loadImage('images/Bloodmagic_afternoon.jpg');
 }

 else if(hr >20 && hr <= 22){
   loadImage('images/Bloodmagic_sunset.jpg');
 }

 else if(hr > 22 && hr < 3){
   loadImage('images/Bloodmagic_nighttime.jpg');
 }

 else if(hr >= 3 || hr < 4){
   loadImage('images/Bloodmagic_devilshour.jpg');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



}
