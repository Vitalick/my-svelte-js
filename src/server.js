import http from "http";
import path from "path";
import serveStatic from "serve-static";
// eslint-disable-next-line import/namespace
import render from "./server-render";
import template from "./index.html";

const PORT = Number(process.env.PORT) || 3000;

const serve = serveStatic(path.resolve(__dirname, "../client"));

http
  .createServer(async (req, res) => {
    const url = req.url;
    console.log(url);

    if (url.startsWith("/assets/") || ["/favicon.ico"].includes(url)) {
      serve(req, res, () => {
        res.statusCode = 404;
        res.end("Not Found");
      });
    } else {
      const { error, status, headers, body } = await render({
        url,
        template,

        ctx: {
          cookies: req.headers.cookie
            ? Object.fromEntries(
                new URLSearchParams(
                  req.headers.cookie.replace(/;\s*/g, "&")
                ).entries()
              )
            : {},

          headers: req.headers,
        },
      });

      if (error) {
        console.error(error);
      }

      res.writeHead(status, headers);
      res.end(body);
    }
  })
  .listen(PORT);
