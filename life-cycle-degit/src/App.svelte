<script>

	let inputOne
	let inputTwo
	let element

	let tree = [{eventName: "Birth", detail: "You are too young to sign up for Google"}]
	
	const addLifeEvent = (event) => {
		event.preventDefault()
		const newEvent = {eventName: event.target[0].value, detail: event.target[1].value}		
		tree = [...tree, newEvent];
		inputOne = "";
		inputTwo = "";
		scrollToBottom(element)
	}
</script>

<main>
	<ul>
		{#each tree as e}
		<li class="event-style"><h1 >{e.eventName}</h1><p>{e.detail}</p></li>
		{/each}
		</ul>
	<form bind:this={element} on:submit={(event) => {addLifeEvent(event)}}>
		<label for="inputOne">Life event</label><input id="inputOne" bind:value={inputOne} type="text" />
		<label for="inputTwo">Tell us more</label><input id="inputTwo" bind:value={inputTwo} type="text" />
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

	h1 {
		color: #eff3f4;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	ul {
		list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: flex-start;
	}

	.event-style {
		border-width: 2px;
		border-style: solid;
		border-color:#66686b;
		width:fit-content;
		padding: 20px 50px;
		background-color: #f1ae56;
		margin: 0px 50px
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>