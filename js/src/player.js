class Player {
    constructor() {
        this.velocity = 0
        this.gravity = 0.2
        this.width = 50
        this.height = 42
        this.x = width / 2 - this.width / 2
        this.y = height / 2 - this.height / 2

        this.bird = game.playerImage.straight

        setTimeout(() => {
            this.bird = game.playerImage.down
        }, 1000)
    }

    draw() {
        this.velocity += this.gravity
        this.y += this.velocity

        if (this.y >= height - this.height - game.groundImage.height) {
            this.y = height - this.height - game.groundImage.height
        }

        image(this.bird, this.x, this.y, this.width, this.height)

        if (this.y === height - this.height - game.groundImage.height) {
            game.gameStart = false
            this.y = height / 2 - this.height / 2
        }
    }

    jump() {
        this.velocity = -8

        this.bird = game.playerImage.up

        setTimeout(() => {
            this.bird = game.playerImage.down
        }, 1000)
    }
}
