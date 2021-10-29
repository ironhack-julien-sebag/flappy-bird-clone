class Game {
    setup() {
        this.player = new Player()
        this.background = new Background()
    }

    constructor() {
        this.backgroundImage
    }

    preload() {
        this.backgroundImage = {
            src: loadImage("images/ground.png"),
            x: 0,
            width: 20,
            height: 38,
            speed: 0.005,
        }

        this.playerImage = loadImage("images/bird.png")
    }

    draw() {
        clear()
        this.background.draw()
        this.player.draw()
    }
}
