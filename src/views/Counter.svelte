<script>
  import {time, elapsed} from "../store";
  import SButton from "../components/base/SButton.svelte";

  let count = 0
  const increment = () => {
    count += 1
  }
</script>
<SButton on:click={increment}>Clicks: {count}</SButton>

<div>
  {$time.toLocaleString()} [{$elapsed}]
</div>
