class Enemy extends Entity {

    act(cw, game, frame) {
        let polar = Gmt.cartesianToPolar(game.core.position.x - this.position.x, game.core.position.y - this.position.y);  
        if(frame % 10 == 0 && this.collides(game.core)) {
            this.expire(cw, game, frame);
        } else {
            this.push(polar.phi, this.acceleration);
            this.face(polar.phi);
        }
        this.travel();
    }

}