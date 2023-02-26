# browser-tab-visibility-listener

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![build test](https://github.com/MasatoMakino/browser-tab-visibility-listener/actions/workflows/ci.yml/badge.svg)](https://github.com/MasatoMakino/browser-tab-visibility-listener/actions/workflows/ci.yml)

>This module checks the visibility of the browser tabs and will emit an event if there is any change.

## Demo

[Demo page](https://masatomakino.github.io/browser-tab-visibility-listener/demo/)

## Getting Started

### Install

```bash
npm install https://github.com/MasatoMakino/browser-tab-visibility-listener.git --save-dev
```

### Import

```js
import {
    BrowserTabVisibilityListener,
    BrowserTabVisibilityEvent,
} from "browser-tab-visibility-listener";
```

### Listen

```js
const listener = new BrowserTabVisibilityListener();
listener.on(BrowserTabVisibilityEvent.VISIBLE, () => {
  console.log("visible");
});
listener.on(BrowserTabVisibilityEvent.INVISIBLE, () => {
  console.log("invisible");
});
```

## API documents

[API documents](https://masatomakino.github.io/browser-tab-visibility-listener/api/)
