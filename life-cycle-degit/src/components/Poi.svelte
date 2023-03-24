<script>
  export let poi = {};
  export let addLifeEvent;
  export let deleteLifeEvent;
  import { fade, fly } from "svelte/transition";

  const closeForm = (event) => {
    if (poi.menu === "form" && !poi.name & !poi.detail) deleteLifeEvent(poi.id);
    // this can be where it's written to firebase?
    if (event) {
      console.log("event");
      event.preventDefault();
    }
    poi.menu = null;
  };

  const menuToggle = () => {
    poi.menu = "menu";
  };
</script>

<div>
  <main>
    <h1>{poi.name}</h1>
    <p>{poi.detail}</p>
    {#if poi.menu}
      <button type="button" on:click={closeForm}>-</button>
    {:else}
      <button type="button" on:click={menuToggle}>+</button>
    {/if}
  </main>
  {#if poi.menu === "menu"}
    <div transition:fade>
      <button
        type="button"
        on:click={() => {
          addLifeEvent(poi.id);
        }}>Add life event</button
      >
      {#if poi.name !== "Birth"}
        <button
          type="button"
          on:click={() => {
            poi.menu = "form";
          }}>Edit</button
        >
        <button
          type="button"
          on:click={() => {
            deleteLifeEvent(poi.id);
          }}>Delete</button
        >
      {/if}
    </div>
  {/if}
  {#if poi.menu === "form"}
    <form
      on:submit={() => {
        closeForm(event);
      }}
    >
      <label for="name">Life event</label>
      <input id="name" autofucus bind:value={poi.name} type="text" required />
      <label for="detail">Tell us more</label>
      <input id="detail" bind:value={poi.detail} type="text" required />
      <button type="submit">Ok</button>
    </form>
  {/if}
</div>

<style>
  h1 {
    color: #eff3f4;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  main {
    border-width: 2px;
    border-style: solid;
    border-color: #66686b;
    width: fit-content;
    padding: 20px 50px;
    background-color: #f1ae56;
    margin: 0px 50px;
  }
</style>
