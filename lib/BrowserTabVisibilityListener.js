"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserTabVisibilityEvent = exports.BrowserTabVisibilityListener = void 0;
var eventemitter3_1 = require("eventemitter3");
/**
 * ブラウザタブの表示/非表示イベントを監視するクラス
 */
var BrowserTabVisibilityListener = /** @class */ (function (_super) {
  __extends(BrowserTabVisibilityListener, _super);
  /**
   * コンストラクタ
   *
   * htmlドキュメント生成後、BrowserTabVisibilityListenerのコンストラクタを実行しても
   * BrowserTabVisibilityEvent.VISIBLEイベントは発生しないことに注意。
   * Webアプリケーションの起動を監視したい場合、コンストラクタ実行後に
   * 手動でBrowserTabVisibilityListener.emit(BrowserTabVisibilityEvent.VISIBLE)を実行する。
   */
  function BrowserTabVisibilityListener() {
    var _this = _super.call(this) || this;
    _this.watchVisibilityEvent = function () {
      if (document.visibilityState === "hidden") {
        _this.emit(BrowserTabVisibilityEvent.INVISIBLE);
      } else {
        _this.emit(BrowserTabVisibilityEvent.VISIBLE);
      }
    };
    _this.watchUnloadEvent = function () {
      _this.emit(BrowserTabVisibilityEvent.INVISIBLE);
      _this.dispose();
    };
    var isEnableEnv = BrowserTabVisibilityListener.checkBrowserEnvironment();
    if (!isEnableEnv) return _this;
    document.addEventListener(
      PageVisibilityEventType.CHANGE,
      _this.watchVisibilityEvent,
      false
    );
    window.addEventListener(
      UnloadEventType.BEFORE,
      _this.watchUnloadEvent,
      false
    );
    return _this;
  }
  BrowserTabVisibilityListener.checkBrowserEnvironment = function () {
    if (
      !window ||
      !document ||
      !document.addEventListener ||
      typeof document.hidden === "undefined"
    ) {
      return false;
    }
    return true;
  };
  BrowserTabVisibilityListener.prototype.dispose = function () {
    document.removeEventListener(
      PageVisibilityEventType.CHANGE,
      this.watchVisibilityEvent,
      false
    );
    window.removeEventListener(
      UnloadEventType.BEFORE,
      this.watchUnloadEvent,
      false
    );
  };
  return BrowserTabVisibilityListener;
})(eventemitter3_1.EventEmitter);
exports.BrowserTabVisibilityListener = BrowserTabVisibilityListener;
var PageVisibilityEventType;
(function (PageVisibilityEventType) {
  PageVisibilityEventType["CHANGE"] = "visibilitychange";
})(PageVisibilityEventType || (PageVisibilityEventType = {}));
var UnloadEventType;
(function (UnloadEventType) {
  UnloadEventType["BEFORE"] = "beforeunload";
})(UnloadEventType || (UnloadEventType = {}));
var BrowserTabVisibilityEvent;
(function (BrowserTabVisibilityEvent) {
  BrowserTabVisibilityEvent["VISIBLE"] = "visible";
  BrowserTabVisibilityEvent["INVISIBLE"] = "invisible";
})(
  (BrowserTabVisibilityEvent =
    exports.BrowserTabVisibilityEvent ||
    (exports.BrowserTabVisibilityEvent = {}))
);
