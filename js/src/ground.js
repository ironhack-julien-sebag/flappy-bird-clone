class Ground {
    setup() {}

    draw() {
        // Ground
        for (let i = 0; i < width; i++) {
            image(
                game.groundImage.src,
                game.groundImage.x + i * game.groundImage.width,
                height - game.groundImage.height,
                game.groundImage.width,
                game.groundImage.height
            )

            game.groundImage.x -= game.groundImage.speed

            if (game.groundImage.x < -width) {
                game.groundImage.x = 0
            }
        }
    }
}
