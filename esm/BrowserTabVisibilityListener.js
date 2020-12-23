import { EventEmitter } from "eventemitter3";
/**
 * ブラウザタブの表示/非表示イベントを監視するクラス
 */
export class BrowserTabVisibilityListener extends EventEmitter {
    /**
     * コンストラクタ
     *
     * htmlドキュメント生成後、BrowserTabVisibilityListenerのコンストラクタを実行しても
     * BrowserTabVisibilityEvent.VISIBLEイベントは発生しないことに注意。
     * Webアプリケーションの起動を監視したい場合、コンストラクタ実行後に
     * 手動でBrowserTabVisibilityListener.emit(BrowserTabVisibilityEvent.VISIBLE)を実行する。
     */
    constructor() {
        super();
        this.watchVisibilityEvent = () => {
            if (document.visibilityState === "hidden") {
                this.emit(BrowserTabVisibilityEvent.INVISIBLE);
            }
            else {
                this.emit(BrowserTabVisibilityEvent.VISIBLE);
            }
        };
        this.watchUnloadEvent = () => {
            this.emit(BrowserTabVisibilityEvent.INVISIBLE);
            this.dispose();
        };
        const isEnableEnv = BrowserTabVisibilityListener.checkBrowserEnvironment();
        if (!isEnableEnv)
            return;
        document.addEventListener(PageVisibilityEventType.CHANGE, this.watchVisibilityEvent, false);
        window.addEventListener(UnloadEventType.BEFORE, this.watchUnloadEvent, false);
    }
    static checkBrowserEnvironment() {
        if (!window ||
            !document ||
            !document.addEventListener ||
            typeof document.hidden === "undefined") {
            return false;
        }
        return true;
    }
    dispose() {
        document.removeEventListener(PageVisibilityEventType.CHANGE, this.watchVisibilityEvent, false);
        window.removeEventListener(UnloadEventType.BEFORE, this.watchUnloadEvent, false);
    }
}
var PageVisibilityEventType;
(function (PageVisibilityEventType) {
    PageVisibilityEventType["CHANGE"] = "visibilitychange";
})(PageVisibilityEventType || (PageVisibilityEventType = {}));
var UnloadEventType;
(function (UnloadEventType) {
    UnloadEventType["BEFORE"] = "beforeunload";
})(UnloadEventType || (UnloadEventType = {}));
export var BrowserTabVisibilityEvent;
(function (BrowserTabVisibilityEvent) {
    BrowserTabVisibilityEvent["VISIBLE"] = "visible";
    BrowserTabVisibilityEvent["INVISIBLE"] = "invisible";
})(BrowserTabVisibilityEvent || (BrowserTabVisibilityEvent = {}));
