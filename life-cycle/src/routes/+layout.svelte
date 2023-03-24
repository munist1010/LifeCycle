<script>
	import Header from './Header.svelte';
	import {onMount, beforeUpdate} from "svelte"
	// import './styles.css';
	import "../app.css";
	import anime from "animejs"
	let direction = -1
	let i = 0
	onMount(() => {
		var textWrapper = document.querySelector('.ml12');
		textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

		anime({
			targets: document.querySelectorAll(".square"),
			translateY: function(square) {
				return square.getAttribute("data-x")
			},
			direction: "reverse"
		})
		
		anime.timeline({loop: true})
		.add({
			targets: '.ml12 .letter',
			translateX: [40,0],
			translateZ: 0,
			opacity: [0,1],
			easing: "easeOutExpo",
			duration: 1200,
			delay: (el, i) => 500 + 30 * i
		}).add({
			targets: '.ml12 .letter',
			translateX: [0,-70],
			opacity: [1,0],
			easing: "easeInExpo",
			duration: 1100,
			delay: (el, i) => 100 + 30 * i
		});
	})

const handleClick = () => {
	direction *= -1 
	i += 1
	anime({
		targets: document.querySelectorAll(`.square-${i}`),
		translateY: direction * 100,
		scale: 2
	})
}
</script>

<div class="app">
	<div class="container border border-indigo-700 shadow-lg m-0 text-center sticky top-0 w-screen">navbar test</div>
	<Header />

	<span class="flex w-screen mt-10">
		<div data-x="10px" class="square square-1 flex-1"></div>
		<div data-x="50px" class="square square-2 flex-1"></div>
		<div data-x="90px" class="square square-3 flex-1"></div>
		<div data-x="130px" class="square square-4 flex-1"></div>
		<div data-x="170px" class="square square-5 flex-1"></div>
		<div data-x="210px" class="square square-6 flex-1"></div>
		<slot />
	</span>
	<button class="hover:bg-slate-500 bg-slate-900 text-white hover:text-black font-bold py-2 px-4 rounded mr-auto border border-t-sky-600 border-solid" on:click={() => {handleClick()}}>add first item...</button>

	<h1 class="ml12">it all begins here</h1>

	<div class="container border border-indigo-700 shadow-lg m-0 text-center sticky bottom-0 h-20 w-screen mt-auto">navbar test</div>
</div>

<style>
	.square {
		width: 30px;
		height: 10px;
		background-color: black;
		margin-top: 200px;
		margin-bottom: 200px;
	}

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

.ml12 {
font-weight: 200;
font-size: 1.8em;
text-transform: uppercase;
letter-spacing: 0.5em;
}

.ml12 :global(.letter) {
display: inline-block;
line-height: 1em;
}
</style>
