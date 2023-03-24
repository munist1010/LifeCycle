<script>
  import Poi from "./Poi.svelte";
  export let tree = [];

  const addLifeEvent = (id) => {
    tree.forEach(event => {
      event.menu = null
    });
    const position = tree.findIndex((event) => {
      return event.id === id;
    });
    // Look into replacing this with a class, so you can just do new Event()
    const newEvent = {
      id: tree.length + 1,
      name: "",
      detail: "",
      menu: "form"
    };
    tree.splice(position + 1, 0, newEvent);
    tree = tree;  
  };

  const deleteLifeEvent = (id) => {
    console.log(id)
    if (id === 1) return;
    const position = tree.findIndex((event) => {
      return event.id === id;
    });
    tree.splice(position, 1);
    tree = tree;  
  }

  // Add in "delete life event"
  // Add in "edit life event"
</script>

<main>
  {#each tree as poi}
    <Poi {poi} {addLifeEvent} {deleteLifeEvent} />
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
