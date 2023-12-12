enum Style {
    Info,
    Success,
    Error,
    Warn,
}

const Classes = {
    [Style.Info]: "macaron-info",
    [Style.Success]: "macaron-success",
    [Style.Error]: "macaron-error",
    [Style.Warn]: "macaron-warn"
}

function info(message: string) {
    show(message, Style.Info)
}

function success(message: string) {
    show(message, Style.Success)
}

function error(message: string) {
    show(message, Style.Error)
}

function warn(message: string) {
    show(message, Style.Warn)
}

function show(message: string, style: Style) {
    const macaron = document.createElement("div");
    macaron.innerText = message;
    macaron.classList.add("macaron", Classes[style])
    macaron.onclick = () => macaron.remove();
    document.body.appendChild(macaron);
    setTimeout(() => macaron.remove(), 2 * 1000);
}