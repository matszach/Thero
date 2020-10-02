class Entity {

    constructor(opts) {
        this.position = new Gmt.Vertex(0, 0);
        this.size = opts.size || 10;
        this.shape = opts.shape || 0;
        this.inColor = opts.inColor || 'white';
        this.outColor = opts.outColor || 'gray';
        this.border = opts.border || 2;
        this.moveDirection = 0;
        this.faceDirection = 0;
        this.velocity = 0;
        this.maxVelocity = opts.maxVelocity || 10;
        this.traction = opts.traction || 0;
        this.expired = false;
        this.acceleration = opts.acceleration || 0;
        this.health = new Resource(opts.maxHealth || 100);
        this.duration = opts.duration || 120;
    }

    expire(cw, game, frame) {
        this.expired = true;
        this._onExpire(cw, game, frame);
    }

    _onExpire(cw, game, frame) {
        // abs
    }


    place(x, y) {
        this.position.place(x, y);
    }

    push(direction, velocity) {
        let current = Gmt.polarToCartesian(this.velocity, this.moveDirection);
        let applied = Gmt.polarToCartesian(velocity, direction);
        let composite = Gmt.cartesianToPolar(current.x + applied.x, current.y + applied.y);
        this.moveDirection = composite.phi;
        this.velocity = composite.r;
    }

    pushTowards(vertex, velocity) {
        this.push(Gmt.cartesianToPolar(this.position.x - vertex.x, this.position.y - vertex.y).phi, velocity);
    }

    pushAway(vertex, velocity) {
        this.pushTowards(vertex, -velocity);
    }

    travel() {
        this._applyTraction();
        if(this._shouldMove()) {
            this.position.movePolar(this.velocity, this.moveDirection);
        }
    }

    collides(entity) {
        return this.position.distanceTo(entity.position) < this.size + entity.size;
    }

    _shouldMove() {
        return this.velocity != 0;
    }

    _applyTraction() {
        if(Math.abs(this.velocity) < this.traction) {
            this.velocity = 0;
        } else if (this.velocity > 0) {
            this.velocity -= this.traction;
            if(this.velocity > this.maxVelocity) {
                this.velocity = this.maxVelocity;
            }
        } else {
            this.velocity += this.traction;
            if(this.velocity < -this.maxVelocity) {
                this.velocity = -this.maxVelocity;
            }
        }
    }

    rotate(angle) {
        this.faceDirection += angle;
    }

    face(direction) {
        this.faceDirection = direction;
    }

    act(cw, game, frame) {
        // abs
    }

}

