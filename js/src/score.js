class Score {
    constructor() {
        this.score = 0
        this.fontSize = 40
        this.x = 20
        this.y = 50
    }

    countScore() {
        fill(0, 0, 0, 1000)
        textSize(this.fontSize)
        text(this.score, this.x, this.y)
    }

    draw() {
        this.countScore()
    }
}
