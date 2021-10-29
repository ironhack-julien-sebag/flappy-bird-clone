// Variables
const gameWidth = 800
const gameHeight = 600

const game = new Game()

function preload() {
    game.preload()
}

function setup() {
    createCanvas(gameWidth, gameHeight)
    game.setup()
    // imageMode(CENTER)
}

function draw() {
    game.draw()
}

function keyPressed() {
    if (keyCode === 32) {
        game.player.jump()
    }

    if (keyCode === 82) {
        reload()
    }
}
