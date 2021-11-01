class Game {
    constructor() {
        this.groundImage
        this.pipeImage
        this.pipeRotatedImage
    }

    setup() {
        this.player = new Player()
        this.ground = new Ground()
        this.background = new Background()
        this.obstacles = []
        // this.score = new Score()
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

        // background
        this.backgroundImage = {
            src: loadImage("images/background.png"),
            x: 0,
            width: 400,
            height: 383,
        }

        // Player
        this.playerImage = loadImage("images/bird.gif")

        // Pipe
        this.pipeImage = loadImage("images/pipe.png")
        this.pipeRotated = loadImage("images/pipe-rotated.png")
    }

    score() {
        this.score = 0

        fill(0, 0, 0, 1000)
        textSize(this.fontSize)
        text(this.score, this.x, this.y)
    }

    draw () {
        clear()

        if (frameCount % 200 === 0) {
            this.obstacles.push(new Obstacle(this.pipeImage, this.pipeRotated))
        }

        this.background.draw()

        // this.score.draw()

        this.obstacles.forEach(function (obstacle) {
            obstacle.draw()
        })

        this.obstacles.filter(obstacle => {
            obstacle.collision(this.player)
        })

        this.ground.draw()

        this.player.draw()

        // this.score()
    }
}
