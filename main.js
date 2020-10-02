// setup
const cw = new Gmt.CanvasWrapper('canvas-home');
Gmt.Input.init();
const game = new Game();
const colorHome = new ColorHome();
const painter = new Painter();
game.init();

// game loop
new Gmt.Loop(62, loop => {
    cw.fill('black');
    let frame = loop.getFrame();
    colorHome.calc(cw, frame);
    game.cull(frame);
    game.spawn(cw, frame);
    game.tick(cw, frame);
    painter.paint(cw, frame, colorHome, game);
    cw.fill(colorHome.tint)
}).start(); 