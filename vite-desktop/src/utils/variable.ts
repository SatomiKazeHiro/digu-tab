class DesktopDock {
  private static height = 52;

  get height() {
    return this.height;
  }
}

class DesktopMenu {
  private static height = 40;

  get height() {
    return this.height;
  }
}

const Map = {
  DesktopDock,
  DesktopMenu,
};

export const $getConfig = (target: string, key: string) => {
  return key ? Map[target]?.[key] : Map[target] ?? {};
};
