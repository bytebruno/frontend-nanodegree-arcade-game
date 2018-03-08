class Enemy extends Entity{
    // Constructor of enemy class
    constructor(position , hitbox){
        super('images/enemy-bug.png', position, hitbox);
        this.speed = this.speedChange();
    }

    // Change the speed of the enemy
    speedChange(){
        let speed = Math.random() + 0.1;
        this.speed = speed;
        return speed;
    }

    // Same velocity across different computers
    update(dt){
        this.x += 500 * dt * this.speed;
    }


}