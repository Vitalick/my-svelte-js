<script>
  import { RouterView, RouterLink } from "svelte-pilot";
  import logo from "./assets/svelte.png";
  import { elapsed } from "./store";
  import SButton from "./components/base/SButton.svelte";
  import { getContext } from "svelte";

  let ssrState = getContext("__SVELTE_PILOT_ROUTER__").mode;
  $: ssrState = getContext("__SVELTE_PILOT_ROUTER__").mode;

  let darkMode =
    ssrState === "server"
      ? false
      : ["1", "0"].includes(localStorage.getItem("darkTheme"))
      ? !!parseInt(localStorage.getItem("darkTheme"))
      : !!window.matchMedia("(prefers-color-scheme: dark)").matches;

  const turnDarkMode = () => {
    darkMode = !darkMode;
  };

  $: if (ssrState === "client") {
    if (darkMode) {
      console.log("Turned on");
      window.document.querySelector("body").classList.add("dark");
      localStorage.setItem("darkTheme", "1");
    } else {
      console.log("Turned off");
      window.document.querySelector("body").classList.remove("dark");
      localStorage.setItem("darkTheme", "0");
    }
  }
</script>

<main class="text-center p-2 my-0 mx-auto">
  {ssrState}
  <img src={logo} class="h-64 w-64 " alt="Svelte Logo" />
  <h1>Hello world! {$elapsed}</h1>
  <nav>
    <RouterLink to="/">About</RouterLink>
    <RouterLink to="/counter">Counter</RouterLink>
  </nav>
  <div>
    <RouterView />
  </div>

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
  {darkMode}
  <SButton on:click={turnDarkMode}>Тёмная тема</SButton>
</main>

<!--<style>-->

<!--    p {-->
<!--        max-width: 14rem;-->
<!--        margin: 1rem auto;-->
<!--        line-height: 1.35;-->
<!--    }-->

<!--    @media (min-width: 480px) {-->
<!--        h1 {-->
<!--            max-width: none;-->
<!--        }-->

<!--        p {-->
<!--            max-width: none;-->
<!--        }-->
<!--    }-->
<!--</style>-->
<!--<style global lang="postcss">-->
<!--    @tailwind base;-->
<!--    @tailwind components;-->
<!--    @tailwind utilities;-->

<!--</style>-->
<style global lang="scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  h1 {
    @apply text-primary uppercase text-7xl font-thin my-8 mx-auto max-w-sm;
    @screen sm {
      @apply max-w-none;
    }
  }

  p {
    @apply max-w-xs my-4 mx-auto leading-snug;
    @screen sm {
      @apply max-w-none;
    }
  }

  img {
    @apply inline;
  }

  a {
    @apply text-primary underline transition-colors;

    &:focus {
      @apply no-underline;
    }

    &:hover {
      @apply text-opacity-60;
    }
  }

  body {
    @apply transition-colors;
    &.dark {
      @apply text-light bg-dark-900;
    }
    .dark {
    }
  }
</style>
