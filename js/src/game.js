class Game {
    constructor() {
        this.groundImage
        this.pipeImage
        this.pipeRotatedImage
        this.gameStarted = false
        this.score = new Score()
        this.frameCount = 200
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
        this.playerImage = loadImage("images/bird-straight.gif")

        this.playerImage = {
            straight: loadImage("images/bird-straight.gif"),
            up: loadImage("images/bird-up.gif"),
            down: loadImage("images/bird-down.gif"),
        }

        this.playerImageDead = loadImage("images/bird-dead.png")

        // Pipe
        this.pipeImage = loadImage("images/pipe.png")
        this.pipeRotated = loadImage("images/pipe-rotated.png")

        // Starter image
        this.starterImage = loadImage("images/start-screen.png")

        // Logo
        this.logo = loadImage("images/logo.png")
    }

    startScreen() {
        const highestText = `Highest score: ${this.score.highestPoints}`

        this.background.draw()
        this.ground.draw()
        
        image(
            this.starterImage,
            (width - 640) / 2,
            (height - 440) / 2,
            640,
            440
        )

        text(highestText, (width - textWidth(highestText)) / 2, 220)

        image(
            this.playerImage.straight,
            (width - this.player.width) / 2,
            this.player.y,
            this.player.width,
            this.player.height
        )

        image(this.logo, (width - 250) / 2, 100, 250, 67)
    }

    playing() {
        if (frameCount % this.frameCount === 0) {
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
        const textRestart = "Press R or Space\nto restart the game"

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
