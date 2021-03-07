import { inspect } from '@xstate/inspect';
import { Storage } from './storage';

export class Debug {
  static handle(): void {
    if (typeof window !== 'undefined' && Storage.shouldOpenXStateInspect()) {
      inspect({
        iframe: false
      });
    }
  }
}

Debug.handle();
