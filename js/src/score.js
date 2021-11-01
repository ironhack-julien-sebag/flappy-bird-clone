class Score {
    constructor() {
        this.points = 0
        this.fontSize = 40
        this.x = 20
        this.y = 50
    }

    draw() {
        fill(0, 0, 0, 1000)
        text(this.points, this.x, this.y)
    }
}
