const requireComponent = require.context("./", true, /\w+.(vue|js)$/);

const cmps = {};

requireComponent.keys().forEach((fileName) => {
  const cmp = requireComponent(fileName).default;
  if (cmp && cmp.name) cmps[cmp.name] = cmp;
});

export default cmps;
