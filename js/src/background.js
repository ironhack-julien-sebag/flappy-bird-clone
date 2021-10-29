class Background {
    setup() {}

    draw() {
        // console.log("Background")
        for (let i = 0; i < width; i++) {
            image(
                game.backgroundImage.src,
                game.backgroundImage.x + i * game.backgroundImage.width,
                height - game.backgroundImage.height,
                game.backgroundImage.width,
                game.backgroundImage.height
            )

            game.backgroundImage.x -= game.backgroundImage.speed

            if (game.backgroundImage.x <= width) {
                game.backgroundImage.x = 0
            }
        }
    }
}
