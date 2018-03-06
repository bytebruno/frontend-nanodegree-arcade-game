class Player extends Entity {
    
    constructor(hitbox) {
        super('images/char-boy.png', {x: 205, y: 380}, hitbox);
        this.addEventListener();
    }

    checkCollision(enemy){
        let collision,
        horizontalCollision = (player.x + this.hitbox.sizeX) > enemy.x && player.x < (enemy.x + enemy.hitbox.sizeX),
        verticalCollision = (player.y + this.hitbox.sizeY) > enemy.y && player.y < (enemy.y + enemy.hitbox.sizeY);
        
        collision = (horizontalCollision && verticalCollision) ? true : false;
        return collision;
    }

    handleInput(keyCode){
        let axis,
            xIncrement = 100,
            yIncrement = 85;
        switch(keyCode){
            case 'left':
                this.x -= xIncrement;
                axis = 'x';
                break;
            case 'up':
                this.y -= yIncrement;
                axis = 'y';
                break;
            case 'right':
                this.x += xIncrement;
                axis = 'x';
                break;
            case 'down':
                this.y += yIncrement;
                axis = 'y';
                break;
        }
        this.checkBoundaries(axis);
    }

    checkBoundaries(axis){
        switch(axis){
            case 'x':
                if (this[axis] < 5)
                    this[axis] = 5;
                else if (this[axis] > 405)
                    this[axis] = 405;
                break;
            case 'y':
                if (this[axis] < -45)
                    this[axis] = -45;
                else if(this[axis] > 380)
                    this[axis] = 380;
                break;
        }
    }

    addEventListener(){
        // This listens for key presses and sends the keys to your
        // Player.handleInput() method. You don't need to modify this.
        document.addEventListener('keyup', e => {
            const allowedKeys = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };

            this.handleInput(allowedKeys[e.keyCode]);
        });
    }

    
}