class Player extends Entity {

    act(cw, game, frame) {
        
        var player = this;

        Gmt.Input.handleKeys(
            'KeyW', () => player.push(Math.PI * 1.5, player.acceleration),
            'KeyA', () => player.push(Math.PI * 1.0, player.acceleration),
            'KeyS', () => player.push(Math.PI * 0.5, player.acceleration),
            'KeyD', () => player.push(Math.PI * 0.0, player.acceleration)
        );

        var mv = Gmt.Input.mousePosVertexCW(cw);
        player.face(Gmt.cartesianToPolar(player.position.x - mv.x, player.position.y - mv.y).phi + Math.PI);
        this.travel();

        var msb = Gmt.Input.mouseButtons();
        
        if(msb.left) {
            if(frame % 4 == 0) {
                let p = new Projectile(TEMPLATE.PLAYER_PROJECTILE_1);
                p.push(player.faceDirection + Gmt.randFloat(-0.02, 0.02), p.maxVelocity);
                p.place(player.position.x, player.position.y);
                game.particles.push(p);
            }
        } else if(msb.right) {
            if(frame % 12 == 0) {
                Gmt.iter1D(Gmt.randInt(7, 10), i => {
                    let p = new Projectile(TEMPLATE.PLAYER_PROJECTILE_2);
                    p.push(player.faceDirection + Gmt.randFloat(-0.15, 0.15), p.maxVelocity * Gmt.randFloat(0.9, 1));
                    p.place(player.position.x, player.position.y);
                    game.particles.push(p);
                });
            }
        }

        if(frame % 1 == 0 && player.velocity > 0) {
            let trail = new Particle(TEMPLATE.PLAYER_TRAIL);
            trail.place(player.position.x, player.position.y);
            trail.push(Gmt.randFloat(-Math.PI, Math.PI), trail.maxVelocity);
            game.particles.push(trail);
        }
    }

    takeDamage(n) {
        if(!this.health.pay(n)) {
            this.expired = true;
        }
    }

}