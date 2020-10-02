class Game {

    constructor() {
        this.player = null;
        this.core = null;
        this.enemies = [];
        this.projectiles = [];
        this.particles = [];
    }

    init() {
        this.core = new Core(TEMPLATE.CORE);
        this.player = new Player(TEMPLATE.PLAYER);
        this.player.place(300, 300);
    }
    
    cull(gameFrame) {
        // check if game over
        if(gameFrame % 60) {
            this.projectiles = this.projectiles.filter(e => !e.expired);
            this.enemies = this.enemies.filter(e => !e.expired);
            this.particles = this.particles.filter(e => !e.expired);
        }
    }

    spawn(cw, gameFrame) {
        if(gameFrame % 30 == 0) {
            let e = new Enemy(TEMPLATE.ENEMY_1);
            this._placeAtSpawn(cw, e);
            this.enemies.push(e);
        }
    }

    _placeAtSpawn(cw, e) {
        let brect = cw.getBoundingRect();
        let x, y;
        if(Gmt.randBool()) {
            x = (Gmt.randBool() ?  Gmt.randFloat(0.05, 0.1) : Gmt.randFloat(0.9, 0.95)) * brect.width;
            y = Gmt.randFloat(0.05, 0.95) * brect.height;
        } else {
            x = Gmt.randFloat(0.05, 0.95) * brect.width;
            y = (Gmt.randBool() ?  Gmt.randFloat(0.05, 0.1) : Gmt.randFloat(0.9, 0.95)) * brect.height;
        }
        e.place(x, y);
    }

    _tickOne(e, cw, gameFrame) {
        if(!e.expired) {
            e.act(cw, this, gameFrame);
        }
    }

    tick(cw, gameFrame) {
        if(this.player) this._tickOne(this.player, cw, gameFrame);
        if(this.core) this._tickOne(this.core, cw, gameFrame);
        this.enemies.forEach(e => this._tickOne(e, cw, gameFrame));
        this.projectiles.forEach(e => this._tickOne(e, cw, gameFrame));
        this.particles.forEach(e => this._tickOne(e, cw, gameFrame));
    }

}