// Variables
let gameWidth = 800
let gameHeight = 600

const game = new Game()

let font

function preload() {
    game.preload()
    font = loadFont("fonts/PressStart2P-vaV7.ttf")
}

function setup() {
    createCanvas(gameWidth, gameHeight)
    fill(83, 56, 70)
    rectMode(CENTER)
    textFont(font)
    textSize(24)

    game.setup()
}

function highScore() {
    let highest = game.score.highestPoints
    window.localStorage.setItem("savedGame", highest.toString())
    window.localStorage.getItem("savedGame")
}

function draw() {
    game.draw()
    highScore()
}

function startGame() {
    game.gameStart = true
}

function keyPressed() {
    if (keyCode === 32) {
        if (game.gameStart === false && game.gameStarted === false) {
            startGame()
        } else if (game.gameStart === false && game.gameStarted === true) {
            window.location.reload()
        } else {
            game.player.jump()
        }
    }

    if (keyCode === 82) {
        window.location.reload()
    }
}

function clearScore() {
    game.score.highestPoints = 0
}
