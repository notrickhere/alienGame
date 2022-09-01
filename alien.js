class ship {
    constructor(hull, firePower, accuracy) {
        this.hull = hull
        this.firePower = firePower
        this.accuracy = accuracy
    }
}
class usShip {
    constructor(hull, firePower, accuracy) {
        this.hull = hull
        this.firePower = firePower
        this.accuracy = accuracy
    }
}
// -------------------------functions for their attributes
function randomHull() {
    return Math.random() * (6 - 3) + 3;
}
function randomFirepower() {
    return Math.random() * (4 - 2) + 2;
}
function randomAccuray() {
    return Math.random() * (0.8 - 0.6) + 0.6;
}
// ------------------------ making the ships
const USSHelloWord = new usShip(20, 5, 0.7)
let bandOfShips = []



const newShip = () => {
    const alienShip = new ship(randomHull(), randomFirepower(), randomAccuray())
    bandOfShips.push(alienShip)
    let singleAlienDiv = document.createElement('div')
    singleAlienDiv.setAttribute('class', 'singleAlien')
    let alienSide = document.querySelector('.alienSide')
    alienSide.append(singleAlienDiv)
}
for (let i = 0; i < 6; i++) {
    newShip()
}



//player attack the alien shit
function playerAttack() {
    if (Math.random() < USSHelloWord.accuracy) {
        bandOfShips[0].hull -= USSHelloWord.firePower
        console.log(`Our ship HIT the attack and now the alien has ${bandOfShips[0].hull} health points left`)
        didAlienShipSurvive()
    } else {
        console.log(`We've MISSED the attack`)
    }
}
//ship attacks you
function alienAttack() {
    if (Math.random() < bandOfShips[0].accuracy) {
        USSHelloWord.hull -= bandOfShips[0].firePower
        console.log(`Alien ship HIT the attack and now we have ${USSHelloWord.hull} health points left`)
        didPlayerSurvive()
    } else {
        console.log(`Alien ship MISSED the attack`)
    }
}
//if the ship survives it attacks you
function didAlienShipSurvive() {
    if ((bandOfShips[0].hull) <= 0) {
        console.log(`Ship successfully destroyed`)

        bandOfShips.shift()
        console.log(gameOver())
    } else if ((bandOfShips[0].hull) > 0) {
        alienAttack()
    }

}
// check if you survive
function didPlayerSurvive() {
    if ((USSHelloWord.hull) <= 0) {
        console.log(`You LOST`)
    } else if ((USSHelloWord.hull) > 0) {
        playerAttack()
    }
}
let flag = true
function retreat() {
    flag = false
    globalThis.location.reload()
}
function gameOver() {
    if (bandOfShips.length === 0) {
        alert(`Congrats you've won the game Please RESET`);
        return `You've Won the Game`
    }
}
//selecting the player attack button

function game() {
    // while ( bandOfShips.length > 0 ){
    //     didPlayerSurvive()
    //     didAlienShipSurvive()
    // }
    // console.log(gameOver())
    let playerAttackButton = document.getElementById('playerAttack')
    playerAttackButton.addEventListener('click', playerAttack)
    let resetButton = document.getElementById('resetButton')
    resetButton.addEventListener('click', retreat)

}
console.log(game())

//make 1 div from js and put it inside ur alien side 


