define(["require", "exports", "Phaser", "./Output", "./MainScene", "./Game"], function (require, exports, Phaser, Output_1, MainScene_1, Game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Playground: https://next.plnkr.co/edit/61zD3u1nINJSvq7x?preview
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            Output_1.default.Instance.Print("Phaser Version: " + Phaser.VERSION);
            // We initialising Phaser
            // We tell Phaser to add and start the first scene (MainScene)
            var config = {
                title: "First Project",
                width: 410, height: 410,
                type: Phaser.AUTO,
                scene: [MainScene_1.MainScene],
                parent: "gameDiv"
            };
            var game = new Game_1.default(config);
        };
        return Program;
    }());
    // Debug Version
    Program.Main();
});
// Release Version
// window.onload = () => Program.Main();
//# sourceMappingURL=Program.js.map