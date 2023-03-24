<script>
	import Header from './Header.svelte';
	// import './styles.css';
	import "../app.css"
	import { gsap } from "gsap/dist/gsap";
	import { Draggable } from "gsap/dist/Draggable";
	import { onMount } from 'svelte';

gsap.registerPlugin(Draggable);

onMount(() => {
	Draggable.create(".box", {type:"x,y", edgeResistance:0.65, bounds:".app", inertia:true});
})
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	<section>
		<div class="box w-10 h-10 bg-cyan-500 border-solid">
			box
		</div>
	</section>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
