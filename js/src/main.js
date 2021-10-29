// Variables
const gameWidth = window.innerWidth - 100
const gameHeight = window.innerHeight - 100

const game = new Game()

function preload() {
    game.preload()
}

function setup() {
    createCanvas(gameWidth, gameHeight)
}

function draw() {
    game.draw()
}
