

class DelayIntervalRunnableWrapper {

    canItRun = false;
    id;
    func;
    stopConditionFn;
    onStopConditionCompletedEventBus;

    constructor(fn) {
        this.func = fn;
        this.onStopConditionCompletedEventBus = new EventBus();
    }

    execute(repeatEveryMiliseconds, stopConditionFn) {
        
        this.stopConditionFn = stopConditionFn;
        this.canItRun = true;
        this.id = window.setInterval(() => {
            
            if(!this.canItRun) {
                this.interrupt();
            }
            else {
                if(!this.stopConditionFn()) {
                    this.func();
                }
                else{
                    this.onStopConditionCompletedEventBus.dispatch();
                    this.interrupt();
                }
            }

        }, repeatEveryMiliseconds);
    }

    interrupt() {
        this.canItRun = false;
        console.log("interrupt " + this.id)
        window.clearInterval(this.id);
    }
}