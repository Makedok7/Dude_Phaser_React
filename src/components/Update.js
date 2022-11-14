import Phaser from "phaser";

class Update extends Phaser.Scene{

    constructor(){
        super('Update')
    }

    create(data){
        this.player = data.player
        this.plataforms = data.plataforms
        this.cursors = data.cursors
        this.stars = data.stars
        this.physics = data.physics
    }

    update(){
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(160);

            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }


    }
    
}

export default Update