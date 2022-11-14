import Phaser from "phaser";

class GameOver extends Phaser.Scene{

    constructor(config){
        super('GameOver')
        this.config = config
    }
    create(){
        //Fondo
        this.add.image(400,300,'gameOver')
        //Botones
        this.buttonReset = this.add.sprite(400,500,'reset').setInteractive()

        this.buttonReset.on('pointerdown', function (){
            this.scene.start('Preload')
        },this)

    }
}

export default GameOver