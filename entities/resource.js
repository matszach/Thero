class Resource {

    constructor(max) {
        this.curr = max;
        this.max = max;
    }

    has(n) {
        return this.curr >= n;
    }

    add(n) {
        this.curr += n;
        if(this.curr > this.max) {
            this.curr = this.max;
        }
    }

    pay(n) {
        if(this.has(n)) {
            this.curr -= n;
            return true;
        } else {
            return false;
        }
    }

}