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
        this.score = new Score()
        this.gameStart = false
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

    draw() {
        clear()

        if (this.gameStart === true) {
            if (frameCount % 200 === 0) {
                this.obstacles.push(
                    new Obstacle(this.pipeImage, this.pipeRotated)
                )
            }

            this.background.draw()

            this.obstacles.forEach(function (obstacle) {
                obstacle.draw()
            })

            this.obstacles.filter(obstacle => {
                obstacle.collision(this.player)
            })

            this.ground.draw()

            this.player.draw()

            this.score.draw()
        } else if (this.gameStart === false && this.score.points > 0) {
            const textPoints = `Your score: ${this.score.points}`
            const textRestart = "Restart game"

            text(textPoints, (width - textWidth(textPoints)) / 2, height / 2 - 30)

            text(
                textRestart,
                (width - textWidth(textRestart)) / 2,
                height / 2 + 30
            )
        } else {
            // textSize(48)
            const textStart = "Press space to start"
            text(textStart, (width - textWidth(textStart)) / 2, height / 2 + 15)
        }
    }
}
