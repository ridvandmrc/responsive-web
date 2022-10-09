const path = require("path");
const { override, addWebpackAlias, useBabelRc } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "./src/components"),
    "@utils": path.resolve(__dirname, "./src/utils"),
  }),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc()
);
