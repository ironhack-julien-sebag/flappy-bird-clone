class Score {
    constructor() {
        this.points = 0
        this.fontSize = 40
        this.x = 30
        this.y = 50
        this.highestPoints = window.localStorage.getItem("savedGame") || 0
    }

    draw() {
        // Save highest score
        if (this.points > this.highestPoints) {
            this.highestPoints = this.points
        }

        fill(83, 56, 70)
        textAlign(LEFT)
        text(
            `Your score: ${this.points}\nHighest score: ${this.highestPoints}`,
            this.x,
            this.y
        )
    }
}
