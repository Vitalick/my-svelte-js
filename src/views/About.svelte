

<script>
  import {RouterLink} from "svelte-pilot";

  import SButton from "../components/base/SButton.svelte";
  const goBack = () => {
    window.history.back()
  }
</script>

<SButton on:click={goBack}>
  Go back
</SButton>
<RouterLink to="/counter">Counter</RouterLink>
