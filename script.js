'use scrict';

const CANVAS_WIDTH = 450
const CANVAS_HEIGHT = 700
const CIRCLE_RADIUS = 20

let circle_x = CIRCLE_RADIUS
let circle_y = 300
let circle_inc = 5
let circle_cni = null
let bulletCount = 0


// let mouseover_count = 0;

document.getElementById("door").addEventListener("click", moving)


let door_open = false


function moving() {
  if (door_open){
    document.getElementById("door").src = "images/dedBirb.png"
  } else {
    document.getElementById("door").src = "images/dedBirb.png"
    //document.getElementById("door")//move down
  }

  door_open = !door_open
}



// canvas setup
function setup() {

  createCanvas(450, 700)
  background(172, 255, 239)

}

//circle setup
function draw(){

  background(172, 255, 239)


  if (circle_x > CANVAS_WIDTH - CIRCLE_RADIUS || circle_x < CIRCLE_RADIUS) {
    circle_inc *= -1
  }

  if (mouseX >= circle_x - CIRCLE_RADIUS && mouseX <= circle_x + CIRCLE_RADIUS && mouseY >= circle_y - CIRCLE_RADIUS && mouseY <= circle_y + CIRCLE_RADIUS) {
    circle_cni = 10
    circle_inc = 0
    bulletCount +=1
  }








circle_y += circle_cni
circle_x += circle_inc

fill(0, 0, 0)
stroke(172, 255, 239)
circle(circle_x, circle_y, CIRCLE_RADIUS * 2)


}



// incase testing code above breaks

// const CANVAS_WIDTH = 450
// const CANVAS_HEIGHT = 700
// const CIRCLE_RADIUS = 20

// let circle_x = CIRCLE_RADIUS
// let circle_inc = 5


// // let mouseover_count = 0;

// document.getElementById("door").addEventListener("click", moving)


// let door_open = false


// function moving() {
//   if (door_open){
//     document.getElementById("door").src = "images/dedBirb.png"
//   } else {
//     document.getElementById("door").src = "images/dedBirb.png"
//     document.getElementById("door")//move down
//   }

//   door_open = !door_open
// }



// // canvas setup
// function setup() {

//   createCanvas(450, 700)
//   background(172, 255, 239)

// }

// //circle setup
// function draw(){

//   background(172, 255, 239)


//   if (circle_x > CANVAS_WIDTH - CIRCLE_RADIUS || circle_x < CIRCLE_RADIUS) {
//     circle_inc *= -1


// }

// function murder(){

// if (mouse)

// }




// circle_x += circle_inc

// fill(0, 0, 0)
// stroke(172, 255, 239)
// circle(circle_x, 300, CIRCLE_RADIUS * 2)


// }


