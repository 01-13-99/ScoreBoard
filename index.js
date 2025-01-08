let pointsEl = document.getElementById("points-el");
pointsEl.innerText = 0;

let points = 0;

function plusOneClick(){
  points +=1
  pointsEl.innerText = points;
}

function plusTwoClick(){
  points +=2
  pointsEl.innerText = points;
}

function plusThreeClick(){
  points +=3
  pointsEl.innerText = points;
}

let pointsGuest = document.getElementById("points-guest")
pointsGuest.innerText = 0;

let btnOneGuest = document.getElementById("btn-one");
let btnTwoGuest = document.getElementById("btn-two");
let btnThreeGuest = document.getElementById("btn-three");

guestPoints = 0;

function plusOneClickGuest(){
  guestPoints +=1
  pointsGuest.innerText = guestPoints;
}

function plusTwoClickGuest(){
  guestPoints +=2
  pointsGuest.innerText = guestPoints;
}

function plusThreeClickGuest(){
  guestPoints +=3
  pointsGuest.innerText = guestPoints;
}