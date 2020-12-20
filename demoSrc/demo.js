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
};
