
import * as Phaser from "Phaser";

// We create our only scene
export default class MainScene extends Phaser.Scene
{
    private _player: Phaser.GameObjects.Sprite;

    public constructor()
    {
        super({ key: "MainScene" });
    }

    // We define the 3 default Phaser methods

    protected preload(): void
    {
        // This method will be executed at the beginning
        // That's where we load the game's assets

        this.load.image("player", "assets/player.png");
    }

    protected create(): void
    {
        // This method is called after the preload method
        // Here we set up the game, display sprites, etc.

        // this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#3498db");
        // this.cameras.main.backgroundColor.setTo(52, 152, 219);
        // this.cameras.main.setBackgroundColor("#3498db");

        this._player = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, "player");
        console.log(this._player.originX); // Default: 0.5
        console.log(this._player.originY); // Default: 0.5
        // this._player.setOrigin(0.5, 0.5);
    }

    public update(): void
    {
        // This method is called 60 times per second
        // It contains the game logic
    }

    // And here we will later add some of our methods
}
