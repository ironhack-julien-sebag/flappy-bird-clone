class Obstacle {
    constructor(image) {
        this.image = image
        this.x = width
        this.y = random(100, 550)
        this.width = 50
        this.height = 500
    }

    draw() {
        this.x--
        image(this.image, this.x, this.y, this.width, this.height)
    }
}
