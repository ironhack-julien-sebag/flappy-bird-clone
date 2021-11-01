// Variables
const gameWidth = 800
const gameHeight = 600

const game = new Game()

let font

function preload() {
    game.preload()
    font = loadFont("fonts/PressStart2P-vaV7.ttf")
}

function setup() {
    createCanvas(gameWidth, gameHeight)
    game.setup()
    rectMode(CENTER)
    textSize(24)
    textFont(font)
}

function draw() {
    game.draw()
}

function startGame() {
    game.gameStart = true
}

function restartGame() {
    game.gameStart = false

    setTimeout(() => {
        game.gameStart = true
    }, 300)
}

function keyPressed() {
    if (keyCode === 32) {
        if (game.gameStart === true) {
            game.player.jump()
        }
        
        startGame()
    }

    if (keyCode === 82) {
        restartGame()
    }
}
