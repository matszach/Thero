class ColorHome {

    constructor() {
        this.tint = 'black';
        this.border = 'black';
    }

    calc(cw, frameNum) {
        let brect = cw.getBoundingRect();
        let step = (frameNum * 20) % (2 * brect.width + 2 * brect.height);
        let startv, endv;
        if(step < brect.width) {
            startv = new Gmt.Vertex(step, 0);
            endv = new Gmt.Vertex(brect.width - step, brect.height);  
        } else if(step < brect.width + brect.height) {
            step -= brect.width;
            startv = new Gmt.Vertex(brect.width, step);
            endv = new Gmt.Vertex(0, brect.height - step);  
        } else if(step < 2 * brect.width + brect.height) {
            step -= (brect.width + brect.height);
            startv = new Gmt.Vertex(brect.width - step, brect.height);  
            endv = new Gmt.Vertex(step, 0);
        } else {
            step -= (2 * brect.width + brect.height);
            startv = new Gmt.Vertex(0, brect.height - step);  
            endv = new Gmt.Vertex(brect.width, step);
        }
        // cw.fillCircle(startv.toCircle(100), 'red');
        // cw.fillCircle(endv.toCircle(100), 'blue');
        let cs1 = (frameNum % 200)/200;
        cs1 = ((cs1 < 0.5) ? (cs1 * 2) : ((1 - cs1) * 2)) * 80; 
        let cs2 = ((frameNum + 100) % 200)/200;
        cs2 = ((cs2 < 0.5) ? (cs2 * 2) : ((1 - cs2) * 2)) * 80; 
        this.tint = cw.linearGradient(
            startv, endv, 
            0, cw.rgba(cs1, 0, cs2, 0.2), 
            1, cw.rgba(0, cs2, cs1, 0.2)
        );
        this.border = cw.linearGradient(
            startv, endv, 
            0, cw.rgba(cs1, 0, cs2, 0.7), 
            1, cw.rgba(0, cs2, cs1, 0.7)
        );
    }
    
}