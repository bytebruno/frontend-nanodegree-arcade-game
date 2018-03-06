/*Entities is Player and Enemy's base class. It takes a  sprite url,
an object with x and y values and a hitbox object with sizeX and sizeY dimensions*/
class Entity {

    constructor(sprite, position, hitbox){
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        this.x = position.x;
        this.y = position.y;
        this.hitbox = hitbox;
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = sprite;
    }

    // Render on screen
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    
}