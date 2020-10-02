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

    _onExpire(cw, game, frame) {
        let e = this;
        Gmt.iter1D(Gmt.randInt(10, 20), i => {
            let p = new Particle(TEMPLATE.ENEMY_1_DEATH_PARTICLE);
            p.place(e.position.x, e.position.y);
            p.push(Gmt.randFloat(0, 2 * Math.PI), Gmt.randFloat(0, p.maxVelocity));
            p.face(Gmt.randFloat(0, 2 * Math.PI));
            game.particles.push(p);
        });
    }

}