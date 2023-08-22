

class DelayTimeRunnableWrapper {

    canItRun = false;
    id;
    func;

    constructor(fn) {
        this.func = fn;
    }

    execute(delayMiliseconds) {
        this.canItRun = true;
        this.id = window.setTimeout(() => {
            console.log("execute " +this.id)
            if(this.canItRun) {
                this.func();
            }

        }, delayMiliseconds);
    }

    interrupt() {
        this.canItRun = false;
        console.log("interrupt " + this.id)
        window.clearTimeout(this.id);
    }
}