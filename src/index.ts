const enum MacaronType {
    Info,
    Success,
    Error,
    Warn,
}

interface Macaron {
    message: string;
    type: MacaronType;
    action?(): void;
}

const macaron = {
    Classes: {
        [MacaronType.Info]: "macaron-info",
        [MacaronType.Success]: "macaron-success",
        [MacaronType.Error]: "macaron-error",
        [MacaronType.Warn]: "macaron-warn",
    },

    timeout: 2 * 1000,

    setTimeout: function (duration: number) {
        this.timeout = duration;
    },

    doAction: function (element: Element, cfg: Macaron) {
        if (cfg.action) {
            cfg.action();
            element.remove();
        } else {
            element.remove();
        }
    },

    info: function (message: string, action?: () => void) {
        return this.show({
            message: message,
            type: MacaronType.Info,
            action: action,
        });
    },

    success: function (message: string, action?: () => void) {
        return this.show({
            message: message,
            type: MacaronType.Success,
            action: action,
        });
    },

    warn: function (message: string, action?: () => void) {
        return this.show({
            message: message,
            type: MacaronType.Warn,
            action: action,
        });
    },

    error: function (message: string, action?: () => void) {
        return this.show({
            message: message,
            type: MacaronType.Error,
            action: action,
        });
    },

    show: function (cfg: Macaron) {
        const elem = document.createElement("div");
        elem.innerText = cfg.message;
        elem.classList.add("macaron", this.Classes[cfg.type]);
        elem.onclick = () => this.doAction(elem, cfg);
        document.body.appendChild(elem);
        setTimeout(() => elem.remove(), this.timeout);
    },
};
