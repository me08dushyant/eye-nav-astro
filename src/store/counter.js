import { atom } from "nanostores";

const initialValue = { value: 0 };
const initURL = { value: "CXXXXXX" };
const url = atom(initURL);
const counter = atom(initialValue);
const isVisible = atom({ value: false });

function increaseCounter() {
  counter.set({ value: counter.get().value + 1 });
}

function decreaseCounter() {
  counter.set({ value: counter.get().value - 1 });
}

function setURL() {
  url.set({ value: "url_xxx_xxx" });
}
function setVisible(visible) {
  isVisible.set({ value: visible });
}

export { counter, url, increaseCounter, decreaseCounter, setURL, setVisible };
