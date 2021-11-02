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

    playing() {
        if (frameCount % 200 === 0) {
            this.obstacles.push(new Obstacle(this.pipeImage, this.pipeRotated))
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
    }

    loseScreen() {
        this.background.draw()
        this.ground.draw()
        textAlign(CENTER)
        const textPoints = `Your score: ${this.score.points}\nYour highest score: ${this.score.highestPoints}`
        const textRestart = "Press Space\nto restart the game"

        text(textPoints, width / 2, 130)

        text(textRestart, width / 2, 460)

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
    }

    startScreen() {
        this.background.draw()
        this.ground.draw()

        const textStart =
            "Press Space to start\nPress Space to jump\nPress R to restart game"
        const textHighestScore = `Your highest score: ${this.score.highestPoints}`

        textAlign(CENTER)

        text(textHighestScore, width / 2, 130)

        text(textStart, width / 2, 430)

        image(
            this.playerImage,
            (width - this.player.width) / 2,
            (height - this.player.height) / 2,
            this.player.width,
            this.player.height
        )
    }

    draw() {
        clear()

        if (this.gameStart === true) {
            this.playing()
        } else if (this.gameStart === false && this.gameStarted === true) {
            this.loseScreen()
        } else {
            this.startScreen()
        }
    }
}
