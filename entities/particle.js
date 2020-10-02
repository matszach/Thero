class Particle extends Entity {

    act(cw, game, frame) {
        this.duration--;
        if(this.duration < 0) {
            this.expire(cw, game, frame);
        }
        this.travel();
    }

}