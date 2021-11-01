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

function keyPressed() {
    if (keyCode === 32) {
        if (game.gameStart === true) {
            game.player.jump()
        } else {
            startGame()
        }

        if (game.gameLost === true) {
            window.location.reload()
        }
    }

    if (keyCode === 82) {
        window.location.reload()
    }
}
