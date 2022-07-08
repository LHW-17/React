//添加自定义webpack配置
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      //@代表根目录与src的拼接
      "@": path.resolve(__dirname, "src"),
    },
  },
};
