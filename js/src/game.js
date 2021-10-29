class Game {
    constructor() {
        this.backgroundImage
        this.background = new Background()
    }

    setup() {
        
    }

    preload() {
        this.backgroundImage = {
            src: loadImage("images/ground.png"),
            x: 0,
            width: 20,
            height: 38,
            speed: 0.2,
        }
    }

    draw() {
        clear()
        this.background.draw()
    }
}
