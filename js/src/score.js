class Score {
    constructor() {
        this.points = 0
        this.fontSize = 40
        this.x = 30
        this.y = 50
        this.highestPoints = window.localStorage.getItem("savedGame") || 0
    }

    draw() {
        fill(0, 0, 0, 1000)
        textAlign(LEFT)
        text(`Your score: ${this.points}`, this.x, this.y)

        // Save highest score
        if (this.points > this.highestPoints) {
            this.highestPoints = this.points
        }

        text(
            `Highest score: ${this.highestPoints}`,
            this.x + 5,
            this.y + 30
        )
    }
}
