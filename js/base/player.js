class Player extends Entity {
    
    // Constructor for the player
    constructor(hitbox) {
        super('images/char-boy.png', {x: 205, y: 380}, hitbox);
        this.addEventListener();
    }

    // Check the collision of the player with an enemy
    checkCollision(enemy){
        let collision,
        horizontalCollision = (this.x + this.hitbox.sizeX) > enemy.x && this.x < (enemy.x + enemy.hitbox.sizeX),
        verticalCollision = (this.y + this.hitbox.sizeY) > enemy.y && this.y < (enemy.y + enemy.hitbox.sizeY);
        
        collision = (horizontalCollision && verticalCollision) ? true : false;
        return collision;
    }

    // Move the player in screen
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

    // Limit the player inside the game screen
    checkBoundaries(axis){
        switch(axis){
            case 'x':
                if (this[axis] < limits.left)
                    this[axis] = limits.left;
                else if (this[axis] > limits.right)
                    this[axis] = limits.right;
                break;
            case 'y':
                if (this[axis] < limits.top)
                    this[axis] = limits.top;
                else if(this[axis] > limits.bottom)
                    this[axis] = limits.bottom;
                break;
        }
    }

    // Adds a event listener to listen to keyboard input and move the player
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