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
        text(`Your score: ${this.points}`, this.x, this.y)

        if (this.points > this.highestPoints) {
            this.highestPoints = this.points
        }
        
        // localStorage.setItem("object", JSON.stringify({
        //     number: this.highestPoints
        // }))

        // let highestScore = localStorage.getItem("object")

        // console.log(highestScore)

        text(
            `Highest score:`,
            this.x + 5,
            this.y + 30
        )
    }
}
