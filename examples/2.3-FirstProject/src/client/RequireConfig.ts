requirejs.config({
    baseUrl: "js",
    paths: {
        "Phaser": "https://cdnjs.cloudflare.com/ajax/libs/phaser/3.19.0/phaser.min"
    }
});

requirejs(["Program"], (Program) => { });
