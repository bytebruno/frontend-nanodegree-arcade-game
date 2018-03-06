class Enemy extends Entity{

    constructor(position , hitbox){
        super('images/enemy-bug.png', position, hitbox);
        this.speed = this.speedChange();
    }

    speedChange(){
        let speed = Math.random() + 0.1;
        this.speed = speed;
        return speed;
    }

    update(dt){
        this.x += 500 * dt * this.speed;
    }


}