class Projectile extends Entity {

    act(cw, game, frame) {
        this.duration--;
        if(this.duration < 0) {
            this.expire(cw, game, frame);
        }
        if(frame % 2 == 0) {
            let pr = this;
            game.enemies.forEach(e => {
                if(pr.collides(e)) {
                    e.expire();
                }
            });
        }
        this.travel();
    }

}