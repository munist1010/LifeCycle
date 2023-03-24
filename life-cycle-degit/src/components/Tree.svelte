<script>
  import Poi from "./Poi.svelte";
  export let tree = [];

  const addLifeEvent = (id, form) => {
    tree.forEach(element => {
      element.form = false
    });
    const formPosition = tree.findIndex((event) => {
      return event.id === id;
    });
    if (form) return;
    const newEvent = {
      id: tree.length + 1,
      name: "",
      detail: "",
      form: true,
    };
    tree.splice(formPosition + 1, 0, newEvent);
    tree = tree;  
  };
</script>

<main>
  {#each tree as poi}
    <Poi {poi} {addLifeEvent} />
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
