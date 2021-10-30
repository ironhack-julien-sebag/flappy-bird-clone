class Game {
    constructor() {
        this.backgroundImage
        this.pipeImage
    }

    setup() {
        this.player = new Player()
        this.background = new Background()
        this.obstacles = []
    }

    preload() {
        this.backgroundImage = {
            src: loadImage("images/ground.png"),
            x: 0,
            width: 20,
            height: 38,
            speed: 0.005,
        }

        this.playerImage = loadImage("images/bird.gif")

        // Pipe
        this.pipeImage = loadImage("images/pipe.png")
    }

    draw() {
        clear()

        if (frameCount % 200 === 0) {
            this.obstacles.push(new Obstacle(this.pipeImage))
            console.log(this.obstacles)
        }

        this.obstacles.forEach(function (obstacle) {
            obstacle.draw()
        })

        this.background.draw()

        this.player.draw()
    }
}
