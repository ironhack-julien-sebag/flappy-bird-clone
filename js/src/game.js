class Game {
    constructor() {
        this.backgroundImage
    }
    
    setup() {
        this.player = new Player()
        this.background = new Background()
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
