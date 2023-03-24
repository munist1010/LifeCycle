<script>
	import Tree from "./components/Tree.svelte";

  let tree = [
    { id: 1, name: "Birth", detail: "It all starts here", menu: null },
  ];
</script>

<main>
		<Tree {tree}/>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
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
