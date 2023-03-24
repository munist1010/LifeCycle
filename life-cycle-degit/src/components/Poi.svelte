<script>
  export let poi = {};
  export let addLifeEvent;

  const closeForm = (event) => {
    event.preventDefault()
    poi.form = !poi.form
  }

  // + button: add a ternery in there for whether form is open or not, if not then open up options
</script>

<div>
  <main>
    <h1>{poi.name}</h1>
    <p>{poi.detail}</p>
    <button type="button" on:click={() => {addLifeEvent(poi.id, poi.form)}}>+</button>
  </main>
  {#if poi.form}<form
      on:submit={() => {closeForm(event)}}
    >
      <label for="inputOne">Life event</label>
      <input id="inputOne" autofucus bind:value={poi.name} type="text" required />
      <label for="inputTwo">Tell us more</label>
      <input id="inputTwo" bind:value={poi.detail} type="text" required />
      <button type="submit">Add</button>
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
