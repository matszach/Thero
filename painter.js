class Painter {

    _paintEntity(e, cw, gameFrame, colorHome, game) {
        if(e.expired) {
            return;
        }
        if(e.shape == 0) {
            let circle = e.position.toCircle(e.size);
            cw.drawCircle(circle, e.inColor, e.outColor, e.border);
        } else {
            let pg = e.position.toCircle(e.size).toPolygon(e.shape, e.faceDirection);
            cw.drawPolygon(pg, e.inColor, e.outColor, e.border);
        }
    } 

    paint(cw, gameFrame, colorHome, game) {
        cw.strokeRect(cw.getBoundingRect(), colorHome.border, 20);
        game.enemies.forEach(e => this._paintEntity(e, cw, gameFrame, colorHome, game));
        if(game.core) this._paintEntity(game.core, cw, gameFrame, colorHome, game);
        if(game.player) this._paintEntity(game.player, cw, gameFrame, colorHome, game);
        game.particles.forEach(e => this._paintEntity(e, cw, gameFrame, colorHome, game));
        game.projectiles.forEach(e => this._paintEntity(e, cw, gameFrame, colorHome, game));
    }

}