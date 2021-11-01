class Player {
    constructor() {
        this.velocity = 0
        this.gravity = 0.2
        this.width = 50
        this.height = 38
        this.x = width / 2 - this.width / 2
        this.y = height / 2 - this.height / 2
    }

    draw() {
        this.velocity += this.gravity
        this.y += this.velocity

        if (this.y >= height - this.height - game.groundImage.height) {
            this.y = height - this.height - game.groundImage.height
        }

        image(game.playerImage, this.x, this.y, this.width, this.height)

        if (this.y === height - this.height - game.groundImage.height) {
            game.gameStart = false
            this.y = height / 2 - this.height / 2
        }
    }

    jump() {
        this.velocity = -8
    }
}
