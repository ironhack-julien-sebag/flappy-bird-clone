class Backrgound {
    setup() {}

    draw() {
        function Img(x) {
            image(
                game.backgroundImage.src,
                game.backgroundImage.x + x,
                height - game.backgroundImage.height - game.groundImage.height,
                game.backgroundImage.width,
                game.backgroundImage.height
            )
        }

        for (let i = 0; i < game.backgroundImage.width; i++) {
            Img(i * game.backgroundImage.width)
            game.backgroundImage.x -= 0.005

            if (game.backgroundImage.x < -width) {
                game.backgroundImage.x = 0
            }
        }
    }
}
