const { createProxyMiddleware } = require("http-proxy-middleware");
const PORT = 8888;

module.exports = function (app) {
  app.use(
    "/src/functions",
    createProxyMiddleware({
      target: `http://localhost:${PORT}/`,
    })
  );
};
