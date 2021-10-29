class Player {
    constructor() {
        this.velocity = 0
        this.gravity = 0.2
        this.width = 100
        this.height = 75
        this.x = width / 2 - (this.width / 2)
        this.y = height / 2 - (this.height / 2)
    }

    draw() {
        this.velocity += this.gravity
        this.y += this.velocity

        if (this.y >= height - this.height) {
            // reset to his starting position
            this.y = height - this.height
        }
        image(game.playerImage, this.x, this.y, this.width, this.height)
    }
}