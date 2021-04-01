import {
  BrowserTabVisibilityListener,
  BrowserTabVisibilityEvent,
} from "../esm";

window.onload = () => {
  const listener = new BrowserTabVisibilityListener();
  listener.on(BrowserTabVisibilityEvent.VISIBLE, () => {
    console.log("visible");
  });
  listener.on(BrowserTabVisibilityEvent.INVISIBLE, () => {
    console.log("invisible");
  });

  const message = document.createElement("span");
  message.innerText = `Open the JavaScript console in your browser.
When you switch tabs, messages will be output to the console.`;
  document.body.appendChild(message);
};
