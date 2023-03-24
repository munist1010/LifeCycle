<script>
	import Tree from "./components/Tree.svelte";

  // Add button to the POI component. Button adds empty obj to array, with 'newForm' set to true
  // The new obj appears and as newForm is true, the form appears with it
  // fields (inputOne and Two) are bound to the obj so you type in one it appears in another
  // 'Submit' turns newForm to false, closing the form

  // POI could even be a class with methods on it?

  let tree = [
    { id: 1, name: "Birth", detail: "It all starts here", form: false },
  ];

  // const addLifeEvent = (event) => {
  //   event.preventDefault();
  //   const newEvent = {
  //     name: event.target[0].value,
  //     detail: event.target[1].value,
  //     form: true
  //   };
  //   tree = [...tree, newEvent];
  // };
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
