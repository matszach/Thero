const TEMPLATE = {

    CORE: {
        shape: 5,
        size: 50,
        maxHealth: 100,
        inColor: Gmt.rgba(50, 50, 100, 0.7),
        outColor: Gmt.rgba(100, 100, 200, 0.9)
    },

    PLAYER: {
        shape: 3,
        size: 15,
        traction: 0.1,
        acceleration: 0.3,
        maxVelocity: 5,
        inColor: Gmt.rgba(50, 50, 150, 0.7),
        outColor: Gmt.rgba(100, 100, 250, 0.9)
    },

    PLAYER_TRAIL: {
        shape: 0,
        size: 2,
        traction: 0.01,
        maxVelocity: 1,
        duration: 40,
        inColor: Gmt.rgba(30, 30, 150, 0.1),
        outColor: Gmt.rgba(80, 80, 200, 0.2)
    },

    PLAYER_PROJECTILE_1: {
        shape: 0,
        size: 4,
        traction: 0.01,
        maxVelocity: 20,
        duration: 40,
        inColor: Gmt.rgba(30, 30, 120, 0.6),
        outColor:Gmt.rgba(80, 80, 160, 0.8)
    },

    PLAYER_PROJECTILE_2: {
        shape: 0,
        size: 2,
        traction: 0.01,
        maxVelocity: 15,
        duration: 30,
        inColor: Gmt.rgba(30, 30, 120, 0.6),
        outColor: Gmt.rgba(80, 80, 160, 0.8)
    },

    ENEMY_1: {
        shape: 4,
        size: 10,
        traction: 0.1,
        acceleration: 0.15,
        maxVelocity: 0.7,
        inColor: Gmt.rgba(150, 50, 50, 0.7),
        outColor: Gmt.rgba(250, 100, 100, 0.9)
    },

    ENEMY_1_DEATH_PARTICLE: {
        shape: 0,
        size: 2,
        traction: 0.01,
        maxVelocity: 2,
        duration: 50,
        inColor: Gmt.rgba(150, 50, 50, 0.2),
        outColor: Gmt.rgba(250, 100, 100, 0.3)
    },

}