class Trees {
    setup() {}

    draw() {
        function Img(x) {
            image(
                game.treesImage.src,
                game.treesImage.x + x,
                height - game.treesImage.height - game.groundImage.height,
                game.treesImage.width,
                game.treesImage.height
            )
        }

        for (let i = 0; i < game.treesImage.width; i++) {
            Img(i * game.treesImage.width)
            game.treesImage.x -= 0.005

            if (game.treesImage.x < -width) {
                game.treesImage.x = 0
            }
        }
    }
}
