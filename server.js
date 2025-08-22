// server.js
const { createServer } = require("http");
const next = require("next");

const port = process.env.PORT || 8080; // App Service sets PORT
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "." });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
