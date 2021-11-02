class Game {
    constructor() {
        this.groundImage
        this.pipeImage
        this.pipeRotatedImage
        this.gameStarted = false
        this.score = new Score()
    }

    setup() {
        this.player = new Player()
        this.ground = new Ground()
        this.background = new Background()
        this.obstacles = []

        this.gameStart = false
        this.gameLost = false
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
        this.playerImageDead = loadImage("images/bird-dead.png")

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
            this.gameStarted = true
            document.querySelector("#resetBtn").style.display = "none"
        } else if (this.gameStart === false && this.gameStarted === true) {
            this.background.draw()
            this.ground.draw()
            textAlign(CENTER)
            const textPoints = `Your score: ${this.score.points}`
            const textHighest = `Your highest score: ${this.score.highestPoints}`
            const textRestart = "Press Space\nto restart the game"

            text(
                textPoints,
                width - textWidth(textPoints) - 90,
                height / 2 - 190
            )

            text(
                textHighest,
                width - textWidth(textHighest) + 100,
                height / 2 - 140
            )

            text(
                textRestart,
                width - textWidth(textRestart) + 340,
                height / 2 + 150
            )

            this.player.y = 100
            this.obstacles = []

            image(
                this.playerImageDead,
                (width - this.player.width) / 2,
                (height - this.player.height) / 2,
                this.player.width,
                this.player.height
            )

            this.gameLost = true
            document.querySelector("#resetBtn").style.display = "block"
        } else {
            this.background.draw()
            this.ground.draw()
            const textStart = "Press Space\nto start\nPress R to restart game"
            textAlign(CENTER)
            text(textStart, width / 2 + 5, 450)
            image(
                this.playerImage,
                (width - this.player.width) / 2,
                (height - this.player.height) / 2,
                this.player.width,
                this.player.height
            )
        }
    }
}
