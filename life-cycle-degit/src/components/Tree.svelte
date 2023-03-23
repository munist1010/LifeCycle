<script>
  import Poi from "./Poi.svelte";
  export let tree = [];
</script>

<main>
  {#each tree as poi}
    <Poi {poi} />
  {/each}
</main>

<style>
  main {
    list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: flex-start;
  }
</style>
