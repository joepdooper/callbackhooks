class CallbackHooks {
    constructor() {
        this.callbacks = {};
    }

    add(name, func) {
        if (!this.callbacks[name]) this.callbacks[name] = [];
        this.callbacks[name].push(func);
    }

    call(name, params) {
        if (this.callbacks[name]) {
            this.callbacks[name].forEach(func => func(params));
        }
    }
}

export { CallbackHooks };