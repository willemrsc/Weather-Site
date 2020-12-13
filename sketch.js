let zoff = 0;
var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?zip=';
var country = ',us&';
var units = 'units=imperial&';
var apkey = 'APPID=206e1a7d304ccee21dc9857342284968';

var input;

function setup() {

  frameRate(10)
  createCanvas(windowWidth,windowHeight);
  background(217, 67, 117);

  input = select('#zips');

  var button = select('#submit');
  button.mousePressed(weatherAsk);

}

function weatherAsk(){

  var url = api+input.value()+country+units+apkey;
  loadJSON(url,gotData);

}

function gotData(data) {
  weather = data;
}

function draw(){

  noStroke();

  if(weather) {

    //let weatherSpeed = map(weather.wind.speed,0,200,0,1);

    var wTemp = weather.main.temp;
    var wRH = weather.main.humidity;
    var wSpeed = weather.wind.speed;

    //for color
    let temp1 = map(wTemp,32,120,0,1);
    let humid1 = map(wRH,0,100,0,1);
    let speed1 = map(wSpeed,0,40,0,1);
    //for shape
    let temp2 = map(wTemp,32,120,0,5);
    let humid2 = map(wRH,0,100,0,5);
    let speed2 = map(wSpeed,0,40,0,5);

    let centerX = windowWidth / 2;
    let centerY = windowHeight / 2;
    //let pointerX = map(mouseX,0,windowWidth,0,1);

//TEMP

    beginShape();
      background(217, 67, 117);

      let from3 = color(214, 250, 242);
      let to3 = color(179, 11, 0);
      let interp3 = lerpColor(from3, to3, temp1);
      fill(interp3);

      for (var a = 0; a < TWO_PI; a+=0.01) {
        let xoff = map(cos(a), -1, 1, 0, temp2);
        let yoff = map(sin(a), -1, 1, 0, temp2);
        let r=map(noise(xoff, yoff, zoff),0,1,100,200);
        let x = r * cos(a) +centerX +400;
        let y = r * sin(a) + centerY;
        vertex(x,y);

      }
      endShape(CLOSE);
      zoff +=0.02;

//Windspeed

    beginShape();

      let from7 = color(199, 222, 255);
      let to7 = color(255, 125, 176);
      let interp7 = lerpColor(from7, to7, speed1);
      fill(interp7);

      for (var a = 0; a < TWO_PI; a+=0.01) {
        let xoff = map(cos(a), -1, 1, 0, speed2);
        let yoff = map(sin(a), -1, 1, 0, speed2);
        let r=map(noise(xoff, yoff, zoff),0,1,100,200);
        let x2 = r * cos(a) +centerX;
        let y2 = r * sin(a) + centerY;
        vertex(x2,y2);

      }
      endShape(CLOSE);
      zoff +=0.02;

//RH

    beginShape();

      let from5 = color(69, 153, 255);
      let to5 = color(255, 153, 128);
      let interp5 = lerpColor(from5, to5, humid1);
      fill(interp5);

      for (var a = 0; a < TWO_PI; a+=0.01) {
        let xoff = map(cos(a), -1, 1, 0, humid2);
        let yoff = map(sin(a), -1, 1, 0, humid2);
        let r=map(noise(xoff, yoff, zoff),0,1,100,200);
        let x3 = r * cos(a) +centerX - 400;
        let y3 = r * sin(a) + centerY;
        vertex(x3,y3);

      }
      endShape(CLOSE);
      zoff +=0.02;

  }
}

/*
//AQI
let from1 = color(217, 255, 255);
let to1 = color(25, 17, 18);
let interp1 = lerpColor(from1, to1, pointerX);
fill(interp1);
noStroke();
ellipse(centerX -250, centerY, 200, 200);

//Canopy
let from2 = color(210, 215, 194);
let to2 = color(58, 69, 3);
let interp2 = lerpColor(from2, to2, pointerX);
fill(interp2);
noStroke();
ellipse(centerX, centerY, 200, 200);

//Rainfall YTD
let from4 = color(40, 123, 201);
let to4 = color(227, 230, 140);
let interp4 = lerpColor(from4, to4, pointerX);
fill(interp4);
noStroke();
ellipse(centerX +500, centerY, 200, 200);

//Soil Moisture
let from6 = color(24, 54, 87);
let to6 = color(227, 181, 107);
let interp6 = lerpColor(from6, to6, pointerX);
fill(interp6);
noStroke();
ellipse(centerX, centerY -250, 200, 200);

}

*/
