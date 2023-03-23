<script>
	import Tree from "./components/Tree.svelte";
  let inputOne;
  let inputTwo;

  let tree = [
    { eventName: "Birth", detail: "It all starts here" },
  ];

  const addLifeEvent = (event) => {
    event.preventDefault();
    const newEvent = {
      eventName: event.target[0].value,
      detail: event.target[1].value,
    };
    tree = [...tree, newEvent];
    inputOne = "";
    inputTwo = "";
  };
</script>

<main>
		<Tree {tree}/>
  <form
    on:submit={(event) => {
      addLifeEvent(event);
    }}
  >
    <label for="inputOne">Life event</label>
    <input id="inputOne" bind:value={inputOne} type="text" required />
    <label for="inputTwo">Tell us more</label>
    <input id ="inputTwo" bind:value={inputTwo} type="text" required />
    <button type="submit">Add</button>
  </form>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
