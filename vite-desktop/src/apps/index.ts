// 在 ts 中 require.context 不被识别
// import.meta.glob 动态导入，构建时，会分离为独立的 chunk
// import.meta.globEager 直接引入（ vite5 已经弃用，改成 import.meta.glob('*', { eager: true }) ）

// const routesModules = import.meta.glob("./*/index.vue", { eager: true });
const routesModules = import.meta.glob("./*/info.ts", { eager: true });
const apps: any = {};

Object.keys(routesModules).forEach((filePath) => {
  const cmp = routesModules[filePath].default;
  let name = cmp.name || filePath.split("/")[1];

  if (cmp && name) apps[name] = cmp;
});

export default apps;
