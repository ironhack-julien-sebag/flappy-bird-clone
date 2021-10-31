class Game {
    constructor() {
        this.groundImage
        this.pipeImage
    }

    setup() {
        this.player = new Player()
        this.ground = new Ground()
        this.trees = new Trees()
        this.obstacles = []
    }

    preload() {
        // Background
        // Ground
        this.groundImage = {
            src: loadImage("images/ground.png"),
            x: 0,
            width: 20,
            height: 38,
            speed: 0.005,
        }

        // Trees
        this.treesImage = {
            src: loadImage("images/background.png"),
            x: 0,
            width: 400,
            height: 383,
        }

        // Player
        this.playerImage = loadImage("images/bird.gif")

        // Pipe
        this.pipeImage = loadImage("images/pipe.png")
    }

    draw() {
        clear()

        if (frameCount % 200 === 0) {
            this.obstacles.push(new Obstacle(this.pipeImage))
        }

        this.trees.draw()

        this.obstacles.forEach(function (obstacle) {
            obstacle.draw()
        })

        this.ground.draw()

        this.player.draw()
    }
}
