export {};

declare global {
  interface Window {
    ezstandalone?: {
      cmd: Array<() => void>;
      enabled?: boolean;
      define: (...ids: number[]) => void;
      enable: () => void;
      display: () => void;
      displayMore: () => void;
      refresh: () => void;
      destroy: () => void;
    };
  }
}

