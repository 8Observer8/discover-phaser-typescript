
import * as Phaser from "Phaser";
import Output from "./Output";
import MainScene from "./MainScene";
import Game from "./Game";

// Playground: https://next.plnkr.co/edit/61zD3u1nINJSvq7x?preview

class Program
{
    public static Main(): void
    {
        Output.Instance.Print(`Phaser Version: ${Phaser.VERSION}`);

        // We initialising Phaser
        // We tell Phaser to add and start the first scene (MainScene)
        const config: Phaser.Types.Core.GameConfig = {
            title: "First Project",
            width: 530, height: 340,
            type: Phaser.AUTO,
            scene: [MainScene],
            parent: "gameDiv",
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { y: 475 },
                    debug: false
                }
            },
            backgroundColor: "#3498db"
        };

        // Create a 500px by 340px game in the 'gameDev' element of the index.html
        let game = new Game(config);
    }
}

// Debug Version
Program.Main();

// Release Version
// window.onload = () => Program.Main();
