interface Macaron {
  message: string;
  type: Type;
  options?: Options;
}

interface Options {
  timeout?: number;
  action?: () => void;
}

const enum Type {
  Info,
  Success,
  Error,
  Warn,
}

let defaultTimeout = 3 * 1000;

export const Classes = {
  [Type.Info]: "macaron-info",
  [Type.Success]: "macaron-success",
  [Type.Error]: "macaron-error",
  [Type.Warn]: "macaron-warn",
};

export function setDefaultTimeout(duration: number) {
  defaultTimeout = duration;
}

export function doAction(element: HTMLElement, macaron: Macaron) {
  if (macaron.options?.action) {
    macaron.options?.action();
  }
  kill(element);
}

function kill(element: HTMLElement) {
  element.style.opacity = "0";
  setTimeout(() => element.remove(), 400);
}

export function info(message: string, options?: Options) {
  return show({
    message,
    type: Type.Info,
    options,
  });
}

export function success(message: string, options?: Options) {
  return show({
    message,
    type: Type.Success,
    options,
  });
}

export function warn(message: string, options?: Options) {
  return show({
    message,
    type: Type.Warn,
    options,
  });
}

export function error(message: string, options?: Options) {
  return show({
    message,
    type: Type.Error,
    options,
  });
}

export function show(macaron: Macaron) {
  const container = document.getElementById("macaron-container")
    ?? document.body.appendChild(document.createElement("div"));
  container.id = "macaron-container";
  const element = document.createElement("div");
  element.innerText = macaron.message;
  element.id = "macaron";
  element.classList.add("macaron", Classes[macaron.type]);
  element.onclick = () => doAction(element, macaron);
  element.onmouseover = () => clearTimeout(timeout);
  element.onmouseout = () => (timeout = setTimeout(
    () => element.remove(),
    macaron.options?.timeout ?? defaultTimeout,
  ));
  container.appendChild(element);
  let timeout = setTimeout(
    () => kill(element),
    macaron.options?.timeout ?? defaultTimeout,
  );
}
