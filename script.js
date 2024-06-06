'use scrict';

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





// canvas setup
function setup() {
  createCanvas(450, 700)
  background(172, 255, 239)

}

//circle setup
function draw(){

  background(172, 255, 239)

 //makes circle0 move
  if (circle_x > CANVAS_WIDTH - CIRCLE_RADIUS || circle_x < CIRCLE_RADIUS) {
    circle_inc = -5
  }

 //circle0 shoting command
  if (mouseX >= circle_x - CIRCLE_RADIUS && mouseX <= circle_x + CIRCLE_RADIUS && mouseY >= circle_y - CIRCLE_RADIUS && mouseY <= circle_y + CIRCLE_RADIUS) {
    circle_cni = 10
    circle_inc = 0
  }

  circle_y += circle_cni
  circle_x += circle_inc





  //makes circle1 move
  //
  //
  //
  //making a border
  if (circle_x1 > CANVAS_WIDTH - CIRCLE_RADIUS || circle_x1 < CIRCLE_RADIUS) {
    circle_inc1 = -3
  }

 //circle1 shoting command
  if (mouseX >= circle_x1 - CIRCLE_RADIUS && mouseX <= circle_x1 + CIRCLE_RADIUS && mouseY >= circle_y1 - CIRCLE_RADIUS && mouseY <= circle_y1 + CIRCLE_RADIUS) {
    circle_cni1 = 10
    circle_inc1 = 0
  }

  circle_y1 += circle_cni1
  circle_x1 += circle_inc1





  //makes circle2 move
  //gotta make it real long so that I can see this green
  //there's probably a much easier way to this, but this will have to do
  //woops messed up the border order sentences, what a tragedy
  //making a border
  //umm... yay for something... I don't know
  if (circle_x2 > CANVAS_WIDTH - CIRCLE_RADIUS || circle_x2 < CIRCLE_RADIUS) {
    circle_inc2 = -2.5
  }

 //circle1 shoting command
  if (mouseX >= circle_x2 - CIRCLE_RADIUS && mouseX <= circle_x2 + CIRCLE_RADIUS && mouseY >= circle_y2 - CIRCLE_RADIUS && mouseY <= circle_y2 + CIRCLE_RADIUS) {
    circle_cni2 = 10
    circle_inc2 = 0
  }

  circle_y2 += circle_cni2
  circle_x2 += circle_inc2





  //makes circle3 move
  //gotta make it real long so that I can see this green
  //there's probably a much easier way to this, but this will have to do
  //woops messed up the border order sentences, what a tragedy
  //making a border
  //umm... yay for something... I don't know
  if (circle_x3 > CANVAS_WIDTH - CIRCLE_RADIUS || circle_x3 < CIRCLE_RADIUS) {
    circle_inc3 = -5.8
  }

 //circle3 shoting command
  if (mouseX >= circle_x3 - CIRCLE_RADIUS && mouseX <= circle_x3 + CIRCLE_RADIUS && mouseY >= circle_y3 - CIRCLE_RADIUS && mouseY <= circle_y3 + CIRCLE_RADIUS) {
    circle_cni3 = 10
    circle_inc3 = 0
  }

  circle_y3 += circle_cni3
  circle_x3 += circle_inc3





  //makes circle4 move
  //gotta make it real long so that I can see this green
  //there's probably a much easier way to this, but this will have to do
  //woops messed up the border order sentences, what a tragedy
  //making a border
  //umm... yay for something... I don't know
  if (circle_x4 > CANVAS_WIDTH - CIRCLE_RADIUS || circle_x4 < CIRCLE_RADIUS) {
    circle_inc4 = -1
  }

 //circle3 shoting command
  if (mouseX >= circle_x4 - CIRCLE_RADIUS && mouseX <= circle_x4 + CIRCLE_RADIUS && mouseY >= circle_y3 - CIRCLE_RADIUS && mouseY <= circle_y4 + CIRCLE_RADIUS) {
    circle_cni4 = 10
    circle_inc4 = 0
  }

  circle_y4 += circle_cni4
  circle_x4 += circle_inc4




  fill(0, 0, 0)
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

  fill(0, 0, 0)
  stroke(172, 255, 239)
  circle(circle_x4, circle_y4, CIRCLE_RADIUS * 2)


}

