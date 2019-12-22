var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "Phaser"], function (require, exports, Phaser) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // We create our only scene
    var MainScene = /** @class */ (function (_super) {
        __extends(MainScene, _super);
        function MainScene() {
            return _super.call(this, { key: "MainScene" }) || this;
        }
        // We define the 3 default Phaser methods
        MainScene.prototype.preload = function () {
            // This method will be executed at the beginning
            // That's where we load the game's assets
            this.load.image("player", "assets/player.png");
        };
        MainScene.prototype.create = function () {
            // This method is called after the preload method
            // Here we set up the game, display sprites, etc.
            // this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#3498db");
            // this.cameras.main.backgroundColor.setTo(52, 152, 219);
            // this.cameras.main.setBackgroundColor("#3498db");
            this._player = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, "player");
            console.log(this._player.originX);
            console.log(this._player.originY);
        };
        MainScene.prototype.update = function () {
            // This method is called 60 times per second
            // It contains the game logic
        };
        return MainScene;
    }(Phaser.Scene));
    exports.default = MainScene;
});
//# sourceMappingURL=MainScene.js.map