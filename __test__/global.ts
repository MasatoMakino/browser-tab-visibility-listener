import * as http from "http";

/** startup local http server **/
let server;
beforeAll(async () => {
  const handler = require("serve-handler");
  server = http.createServer((request, response) => {
    return handler(request, response, { public: `${process.cwd()}/docs/demo` });
  });
  server.listen(3005);
});
afterAll(() => {
  server.close();
});
