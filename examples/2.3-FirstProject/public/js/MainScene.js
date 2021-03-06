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
        // Here we add all the functions we need for our scene
        // For this project we will just have 3 methods
        MainScene.prototype.preload = function () {
            // This method will be executed at the beginning
            // That's where we load the game's assets
            // Load the image
            this.load.image("logo", "https://raw.githubusercontent.com/8Observer8/8observer8.github.io/master/Assets/DiscoverPhaser/phaser3-logo.png");
        };
        MainScene.prototype.create = function () {
            // This method is called after the preload method
            // Here we set up the game, display sprites, etc.
            // Display the image on the screen
            this._sprite = this.add.sprite(205, 205, "logo");
        };
        MainScene.prototype.update = function () {
            // This method is called 60 times per second
            // It contains the game logic
            // Increment the angle of the sprite by 1, 60 times per seconds
            this._sprite.angle += 1;
        };
        return MainScene;
    }(Phaser.Scene));
    exports.MainScene = MainScene;
});
//# sourceMappingURL=MainScene.js.map