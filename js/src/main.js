// Variables
const gameWidth = 800
const gameHeight = window.innerHeight - 100

const game = new Game()

function preload() {
    game.preload()
}

function setup() {
    createCanvas(gameWidth, gameHeight)
    game.setup()
}

function draw() {
    game.draw()
}
