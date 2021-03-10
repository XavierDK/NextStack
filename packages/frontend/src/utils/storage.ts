export class Storage {
  private static xstateInspectKey = 'shouldOpenXStateInspect';

  static enableXStateInspect(): void {
    sessionStorage.setItem(Storage.xstateInspectKey, 'true');
  }

  static disableXStateInspect(): void {
    sessionStorage.setItem(Storage.xstateInspectKey, null);
  }

  static shouldOpenXStateInspect(): boolean {
    return sessionStorage.getItem(Storage.xstateInspectKey) === 'true';
  }
}
