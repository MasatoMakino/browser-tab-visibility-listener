import { BrowserTabVisibilityListener, BrowserTabVisibilityEvent } from "..";

window.visibleState = undefined;

window.onload = () => {
  const listener = new BrowserTabVisibilityListener();
  listener.on(BrowserTabVisibilityEvent.VISIBLE, () => {
    window.visibleState = "visible"; //for selenium test
    console.log("visible");
  });
  listener.on(BrowserTabVisibilityEvent.INVISIBLE, () => {
    window.visibleState = "invisible"; //for selenium test
    console.log("invisible");
  });

  const message = document.createElement("span");
  message.innerText = `Open the JavaScript console in your browser.
When you switch tabs, messages will be output to the console.`;
  message.id = "manual";
  document.body.appendChild(message);
};
