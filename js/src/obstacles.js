class Obstacle {
    constructor(image, rotatedImage) {
        this.image = image
        this.x = width
        this.y = random(250, 500)
        this.yRotated = ((height - this.y) * -1) - 100
        this.width = 50
        this.height = 500

        this.rotatedImage = rotatedImage

        this.countHeight = 200
    }

    draw() {
        this.x--

        image(this.image, this.x, this.y, this.width, this.height)

        image(
            this.rotatedImage,
            this.x,
            this.yRotated,
            this.width,
            this.height
        )
        
        rect(
            this.x + this.width / 2,
            this.y - this.countHeight / 2,
            this.width,
            this.countHeight
        )
    }
}
