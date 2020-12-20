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

    const isEnableEnv = BrowserTabVisibilityListener.checkBrowserEnvironment();
    if (!isEnableEnv) return;

    document.addEventListener(
      PageVisibilityEventType.CHANGE,
      this.watchVisibilityEvent,
      false
    );
    window.addEventListener(
      UnloadEventType.BEFORE,
      this.watchUnloadEvent,
      false
    );
  }

  private static checkBrowserEnvironment() {
    if (
      !window ||
      !document ||
      !document.addEventListener ||
      typeof document.hidden === "undefined"
    ) {
      return false;
    }

    return true;
  }

  private watchVisibilityEvent = () => {
    if (document.visibilityState === "hidden") {
      this.emit(BrowserTabVisibilityEvent.INVISIBLE);
    } else {
      this.emit(BrowserTabVisibilityEvent.VISIBLE);
    }
  };

  private watchUnloadEvent = () => {
    this.emit(BrowserTabVisibilityEvent.INVISIBLE);
    this.dispose();
  };

  public dispose() {
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
  }
}

enum PageVisibilityEventType {
  CHANGE = "visibilitychange",
}

enum UnloadEventType {
  BEFORE = "beforeunload",
}

export enum BrowserTabVisibilityEvent {
  VISIBLE = "visible",
  INVISIBLE = "invisible",
}
