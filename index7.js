homeEl = document.getElementById("score-el1")
guestEl = document.getElementById("score-el2")

let score = 0
let score1 = 0


function addone() {
    score += 1
    homeEl.textContent = score
}


function addtwo() {
    score += 2
    homeEl.textContent = score
}


function addthree() {
    score += 3
    homeEl.textContent = score
}


function add1() {
    score1 += 1
    guestEl.textContent = score1
}


function add2() {
    score1 += 2
    guestEl.textContent = score1
}


function add3() {
    score1 += 3
    guestEl.textContent = score1
}