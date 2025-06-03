let home = 0
let guest = 0

function oneHPoint(){
    home += 1
    console.log(home)
    let homeEl = document.getElementById("home-score")
    homeEl.innerText = home
}

function twoHPoints(){
    home += 2
    console.log(home)
    let homeEl = document.getElementById("home-score")
    homeEl.innerText = home
}

function threeHPoints(){
    home += 3
    console.log(home)
    let homeEl = document.getElementById("home-score")
    homeEl.innerText = home
}


function oneGPoint(){
    guest += 1
    console.log(guest)
    let guestEl = document.getElementById("guest-score")
    guestEl.innerText = guest
}

function twoGPoints(){
    guest += 2
    console.log(guest)
    let guestEl = document.getElementById("guest-score")
    guestEl.innerText = guest
}

function threeGPoints(){
    guest += 3
    console.log(guest)
    let guestEl = document.getElementById("guest-score")
    guestEl.innerText = guest
}


function reset(){
    home = 0
    guest = 0
    console.log(home)  
  let homeEl = document.getElementById("home-score")
    homeEl.innerText = home
  let guestEl = document.getElementById("guest-score")
    guestEl.innerText = guest
}
reset()

