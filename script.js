'use scrict';

document.getElementById("shopForBullets").addEventListener("click", bullets)
let counter = 20
let cash = 0
let box = 0



const CANVAS_WIDTH = 450
const CANVAS_HEIGHT = 700
const CIRCLE_RADIUS = 20

let circle_x = 700
let circle_y = 300
let circle_inc = 5
let circle_cni = null

let circle_x1 = 430
let circle_y1 = 100
let circle_inc1 = 3
let circle_cni1 = null

let circle_x2 = 430
let circle_y2 = 560
let circle_inc2 = 3
let circle_cni2 = null

let circle_x3 = 430
let circle_y3 = 215
let circle_inc3 = 3
let circle_cni3 = null

let circle_x4 = 430
let circle_y4 = 650
let circle_inc4 = 3
let circle_cni4 = null

function random(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 let answer = Math.floor(Math.random() * (max - min + 1) + min);
 return answer
}


function bullets() {
  cash+=box
  if (cash >= 1){
  counter++
  cash-=1
  document.getElementById("click_count").innerText = counter
  document.getElementById("money_count").innerText = cash
  box = 0
  return counter
  }
}


// canvas setup
function setup() {
  createCanvas(450, 700)
  background(172, 255, 239)

}

//circle setup
function draw(){

  background(172, 255, 239)

 //makes circle0 move
  if (circle_x > CANVAS_WIDTH + CIRCLE_RADIUS || circle_x < CIRCLE_RADIUS) {
    circle_inc = random(-7 , -1)
  }

 //circle0 shoting command
  if (mouseX >= circle_x - CIRCLE_RADIUS && mouseX <= circle_x + CIRCLE_RADIUS && mouseY >= circle_y - CIRCLE_RADIUS && mouseY <= circle_y + CIRCLE_RADIUS) {
    circle_cni = 10
    circle_inc = 0
  }
  //revival command for the circle
  if (circle_y > 1000){
    circle_x = random((450 + CIRCLE_RADIUS) , (700))
    circle_y = random((0 + CIRCLE_RADIUS) , (700 - CIRCLE_RADIUS))
    circle_cni = 0
    circle_inc = random(-2 , -1)
    box++
    //if the circle passes by
  } else if (circle_x < 0){
    circle_x = random((1000 + CIRCLE_RADIUS) , (1500))
    circle_y = random((0 + CIRCLE_RADIUS) , (700 - CIRCLE_RADIUS))
    circle_cni = 0
    circle_inc = random(-2 , -1)
  }

  circle_y += circle_cni
  circle_x += circle_inc





  //makes circle1 move
  //
  //
  //
  //making a border
  if (circle_x1 > CANVAS_WIDTH + CIRCLE_RADIUS || circle_x1 < CIRCLE_RADIUS) {
    circle_inc1 = random(-7 , -1)
  }

 //circle1 shoting command
  if (mouseX >= circle_x1 - CIRCLE_RADIUS && mouseX <= circle_x1 + CIRCLE_RADIUS && mouseY >= circle_y1 - CIRCLE_RADIUS && mouseY <= circle_y1 + CIRCLE_RADIUS) {
    circle_cni1 = 10
    circle_inc1 = 0
  }

  if (circle_y1 > 1000){
    circle_x1 = random((450 + CIRCLE_RADIUS) , (700))
    circle_y1 = random((0 + CIRCLE_RADIUS) , (700 - CIRCLE_RADIUS))
    circle_cni1 = 0
    circle_inc1 = random(-2 , -1)

  } else if (circle_x1 < 0){
    circle_x1 = random((450 + CIRCLE_RADIUS) , (700))
    circle_y1 = random((0 + CIRCLE_RADIUS) , (700 - CIRCLE_RADIUS))
    circle_cni1 = 0
    circle_inc1 = random(-2 , -1)
  }


  circle_y1 += circle_cni1
  circle_x1 += circle_inc1





  //makes circle2 move
  //gotta make it real long so that I can see this green
  //there's probably a much easier way to this, but this will have to do
  //woops messed up the border order sentences, what a tragedy
  //making a border
  //umm... yay for something... I don't know
  if (circle_x2 > CANVAS_WIDTH + CIRCLE_RADIUS || circle_x2 < CIRCLE_RADIUS) {
    circle_inc2 = random(-7 , -1)
  }

  //circle1 shoting command
  if (mouseX >= circle_x2 - CIRCLE_RADIUS && mouseX <= circle_x2 + CIRCLE_RADIUS && mouseY >= circle_y2 - CIRCLE_RADIUS && mouseY <= circle_y2 + CIRCLE_RADIUS) {
    circle_cni2 = 10
    circle_inc2 = 0
  }

  //circle2 respawn command, because it'd be too complicated to get new circles created everytime
  if (circle_y2 > 1000){
    circle_x2 = random((450 + CIRCLE_RADIUS) , (700))
    circle_y2 = random((0 + CIRCLE_RADIUS) , (700 - CIRCLE_RADIUS))
    circle_cni2 = 0
    circle_inc2 = random(-2 , -1)

  } else if (circle_x2 < 0){
    circle_x2 = random((450 + CIRCLE_RADIUS) , (700))
    circle_y2 = random((0 + CIRCLE_RADIUS) , (700 - CIRCLE_RADIUS))
    circle_cni2 = 0
    circle_inc2 = random(-2 , -1)
  }


  circle_y2 += circle_cni2
  circle_x2 += circle_inc2





  //makes circle3 move
  //gotta make it real long so that I can see this green
  //there's probably a much easier way to this, but this will have to do
  //woops messed up the border order sentences, what a tragedy
  //making a border
  //umm... yay for something... I don't know
  if (circle_x3 > CANVAS_WIDTH + CIRCLE_RADIUS || circle_x3 < CIRCLE_RADIUS) {
    circle_inc3 = random(-7 , -1)
  }

 //circle3 shoting command
  if (mouseX >= circle_x3 - CIRCLE_RADIUS && mouseX <= circle_x3 + CIRCLE_RADIUS && mouseY >= circle_y3 - CIRCLE_RADIUS && mouseY <= circle_y3 + CIRCLE_RADIUS) {
    circle_cni3 = 10
    circle_inc3 = 0
  }

  //circle3 respawn command, because it'd be too complicated to get new circles created everytime
  if (circle_y3 > 1000){
    circle_x3 = random((450 + CIRCLE_RADIUS) , (700))
    circle_y3 = random((0 + CIRCLE_RADIUS) , (700 - CIRCLE_RADIUS))
    circle_cni3 = 0
    circle_inc3 = random(-2 , -1)

  } else if (circle_x3 < 0){
    circle_x3 = random((450 + CIRCLE_RADIUS) , (700))
    circle_y3 = random((0 + CIRCLE_RADIUS) , (700 - CIRCLE_RADIUS))
    circle_cni3 = 0
    circle_inc3 = random(-2 , -1)
  }

  circle_y3 += circle_cni3
  circle_x3 += circle_inc3





  //makes circle4 move
  //gotta make it real long so that I can see this green
  //there's probably a much easier way to this, but this will have to do
  //woops messed up the border order sentences, what a tragedy
  //making a border
  //umm... yay for something... I don't know
  if (circle_x4 > CANVAS_WIDTH + CIRCLE_RADIUS || circle_x4 < CIRCLE_RADIUS) {
    circle_inc4 = random(-7 , -1)
  }

 //circle4 shoting command
  if (mouseX >= circle_x4 - CIRCLE_RADIUS && mouseX <= circle_x4 + CIRCLE_RADIUS && mouseY >= circle_y4 - CIRCLE_RADIUS && mouseY <= circle_y4 + CIRCLE_RADIUS) {
    circle_cni4 = 10
    circle_inc4 = 0
  }

  //circle4 respawn command, because it'd be too complicated to get new circles created everytime
  if (circle_y4 > 1000){
    circle_x4 = random((450 + CIRCLE_RADIUS) , (700))
    circle_y4 = random((0 + CIRCLE_RADIUS) , (700 - CIRCLE_RADIUS))
    circle_cni4 = 0
    circle_inc4 = random(-2 , -1)

  } else if (circle_x4 < 0){
    circle_x4 = random((450 + CIRCLE_RADIUS) , (700))
    circle_y4 = random((0 + CIRCLE_RADIUS) , (700 - CIRCLE_RADIUS))
    circle_cni4 = 0
    circle_inc4 = random(-2 , -1)
  }

  circle_y4 += circle_cni4
  circle_x4 += circle_inc4

//sun
  fill(255, 195, 99)
  stroke(255, 195, 99)
  circle(225, 200, 150)
//sun light

  fill(255, 219, 141, 50)
  stroke(255, 219, 99, 50)
  square(125, 100, 200, 45)



  fill(255, 0, 0)
  stroke(172, 255, 239)
  circle(circle_x, circle_y, CIRCLE_RADIUS * 2)

  fill(0, 0, 0)
  stroke(172, 255, 239)
  circle(circle_x1, circle_y1, CIRCLE_RADIUS * 2)

  fill(0, 0, 0)
  stroke(172, 255, 239)
  circle(circle_x2, circle_y2, CIRCLE_RADIUS * 2)

  fill(0, 0, 0)
  stroke(172, 255, 239)
  circle(circle_x3, circle_y3, CIRCLE_RADIUS * 2)

  fill(0, 0, 255)
  stroke(172, 255, 239)
  circle(circle_x4, circle_y4, CIRCLE_RADIUS * 2)

}



