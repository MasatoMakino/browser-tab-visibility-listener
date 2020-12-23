import { EventEmitter } from "eventemitter3";
/**
 * ブラウザタブの表示/非表示イベントを監視するクラス
 */
export declare class BrowserTabVisibilityListener extends EventEmitter {
    /**
     * コンストラクタ
     *
     * htmlドキュメント生成後、BrowserTabVisibilityListenerのコンストラクタを実行しても
     * BrowserTabVisibilityEvent.VISIBLEイベントは発生しないことに注意。
     * Webアプリケーションの起動を監視したい場合、コンストラクタ実行後に
     * 手動でBrowserTabVisibilityListener.emit(BrowserTabVisibilityEvent.VISIBLE)を実行する。
     */
    constructor();
    private static checkBrowserEnvironment;
    private watchVisibilityEvent;
    private watchUnloadEvent;
    dispose(): void;
}
export declare enum BrowserTabVisibilityEvent {
    VISIBLE = "visible",
    INVISIBLE = "invisible"
}
//# sourceMappingURL=BrowserTabVisibilityListener.d.ts.map