class Score {
    constructor() {
        this.points = 0
        this.fontSize = 40
        this.x = 30
        this.y = 50
        this.highestPoints = 0
    }

    draw() {
        fill(0, 0, 0, 1000)
        textAlign(LEFT)
        const stringScore = this.points.toString()
        text(`Your score: ${stringScore}`, this.x, this.y)

        // Save highest score
        if (this.points > this.highestPoints) {
            this.highestPoints = this.points
        }

        // We can save only strings => stringify highest score
        let highestString = this.highestPoints.toString()

        // Save to local storage
        window.localStorage.setItem("savedGame", highestString)
        let savedHighest = window.localStorage.getItem("savedGame")

        console.log(savedHighest)

        console.log(localStorage)

        text(
            `Highest score:`,
            this.x + 5,
            this.y + 30
        )
    }
}
