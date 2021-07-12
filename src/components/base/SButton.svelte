<button on:click>
  <slot />
</button>

<style lang="scss">
  button {
    font-family: inherit;
    font-size: inherit;
    @apply py-4 px-8 text-primary bg-primary bg-opacity-10 rounded-4xl border-2 border-solid border-primary border-opacity-0 outline-none tabular-nums cursor-pointer transition-colors;

    &:focus {
      @apply border-opacity-100;
    }

    &:active {
      @apply bg-opacity-30;
    }

    &:hover {
      @apply bg-opacity-20;
    }
  }

  //button {
  //    font-family: inherit;
  //    font-size: inherit;
  //    padding: 1em 2em;
  //    color: #ff3e00;
  //    background-color: rgba(255, 62, 0, 0.1);
  //    border-radius: 2em;
  //    border: 2px solid rgba(255, 62, 0, 0);
  //    outline: none;
  //    width: 200px;
  //    font-variant-numeric: tabular-nums;
  //    cursor: pointer;
  //}

  //button:focus {
  //    border: 2px solid #ff3e00;
  //}
  //
  //button:active {
  //    background-color: rgba(255, 62, 0, 0.2);
  //}
</style>
