// CallbackHooks - v1.0.0

const CallbackHooks = {
    callbacks: {},

    add: function (name, func) {
        if (!this.callbacks[name]) this.callbacks[name] = [];
        this.callbacks[name].push(func);
    },

    call: function (name, params) {
        if (this.callbacks[name]) {
            this.callbacks[name].forEach(func => func(params));
        }
    }
};

export {CallbackHooks};