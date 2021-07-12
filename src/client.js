import { ClientApp } from 'svelte-pilot';
import router from './router';


function main() {
  new ClientApp({
    target: document.body,
    hydrate: Boolean(window.__SSR_STATE__),

    props: {
      router,
      ssrState: window.__SSR_STATE__
    }
  });
}

if (window.__SSR_STATE__) {
  // wait unitl async components loaded
  // prevent screen flash
  router.once('update', main);
} else {
  main();
}