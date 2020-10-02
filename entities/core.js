class Core extends Entity {

    act(cw, game, frame) {
        this.rotate(0.01);
        let brect = cw.getBoundingRect();
        this.place(brect.width/2, brect.height/2);
    }

    takeDamage(n) {
        if(!this.health.pay(n)) {
            this.expired = true;
        }
    }

}