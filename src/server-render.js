import { ServerApp } from "svelte-pilot";
import router from "./router";
// import ssr from 'svelte/types/compiler/compile/render_ssr'

export default async function (args) {
  try {
    return await render(args);
  } catch (e) {
    return {
      error: e,
      status: 500,

      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "no-store",
      },

      body: args.template, // Fallback to CSR
    };
  }
}

async function render({ url, ctx, template }) {
  const matchedRoute = await router.handle("http://127.0.0.1" + url, ctx);

  if (!matchedRoute) {
    console.error("No route found for url:", url);

    if (new URL(url, "http://127.0.0.1").pathname === "/") {
      return {
        status: 404,
        body: "Page Not Found",
        headers: { "content-type": "text/plain" },
      };
    } else {
      return;
      // {
      //   status: 301,
      //
      //   headers: {
      //     location: '/',
      //     'Cache-Control': 'no-store'
      //   }
      // };
    }
  }

  const { route, ssrState } = matchedRoute;

  const res = route.meta.response;

  if (res?.headers?.location) {
    return {
      status: res.status || 301,
      headers: res.headers,
    };
  } else {
    const body = ServerApp.render({ router, route, ssrState });
    body.html += `<script>__SSR_STATE__ = ${serialize(ssrState)}</script>`;
    console.log(JSON.stringify(body.css.code));
    return {
      status: res?.status || 200,

      headers: {
        "Content-Type": "text/html",
        ...res?.headers,
      },

      body: template
        .replace(
          "</head>",
          body.head +
            '<style type="text/css">' +
            body.css.code +
            "</style></head>"
        )
        .replace("<body>", "<body>" + body.html),
    };
  }
}

function serialize(data) {
  return JSON.stringify(data).replace(/</g, "\\u003C").replace(/>/g, "\\u003E");
}
