class Obstacle {
    constructor(image, rotatedImage) {
        // General pipe
        this.x = width
        this.width = 50
        this.height = 500

        // Bottom pipe
        this.image = image
        this.y = random(250, 500)

        // Top pipe
        this.rotatedImage = rotatedImage
        this.yRotated = (height - this.y) * -1 - 100

        // Count points
        this.countHeight = 200
        this.countX = this.x + this.width / 2
        this.countY = this.y - this.countHeight / 2
    }

    collision(playerInfo) {
        const playerX = playerInfo.x + playerInfo.width / 2
        const playerY = playerInfo.y + playerInfo.height / 2

        const obstacleX = this.x + this.width / 2 - this.width / 2
        const obstacleY = this.y - this.countHeight / 2 - this.countHeight / 2

        if (
            playerX === obstacleX &&
            dist(obstacleX, obstacleY, playerX, playerY) < 200
        ) {
            game.score.points++
        } else if (
            playerX === obstacleX &&
            dist(obstacleX, obstacleY, playerX, playerY) > 200
        ) {
            console.log("Lost")
            game.gameStart = false
        }
    }

    passed() {
        noFill()
        noStroke()
        rect(
            this.x + this.width / 2,
            this.y - this.countHeight / 2,
            this.width,
            this.countHeight
        )
    }

    draw() {
        this.x--

        // Bottom pipe
        image(this.image, this.x, this.y, this.width, this.height)

        // Top pipe
        image(this.rotatedImage, this.x, this.yRotated, this.width, this.height)

        // Count points
        this.passed()
    }
}
