
import * as Phaser from "Phaser";

// We create our only scene
export default class MainScene extends Phaser.Scene
{
    private _sprite: Phaser.GameObjects.Sprite;

    public constructor()
    {
        super({ key: "MainScene" });
    }

    // Here we add all the methods we need for our scene
    // For this project we will just have 3 methods

    protected preload(): void
    {
        // This method will be executed at the beginning
        // That's where we load the game's assets

        // Load the image
        this.load.image("logo", "https://raw.githubusercontent.com/8Observer8/8observer8.github.io/master/Assets/DiscoverPhaser/phaser3-logo.png");
    }

    protected create(): void
    {
        // This method is called after the preload method
        // Here we set up the game, display sprites, etc.

        // Display the image on the screen
        this._sprite = this.add.sprite(205, 205, "logo");
    }

    public update(): void
    {
        // This method is called 60 times per second
        // It contains the game logic

        // Increment the angle of the sprite by 1, 60 times per seconds
        this._sprite.angle += 1;
    }
}
