<script lang="ts">
	import type { TransitionConfig } from 'svelte/transition';
	import { onMount } from 'svelte';

	type TypewriterParams = { speed?: number };
	type Typewriter = (node: Element, params?: TypewriterParams) => TransitionConfig;

	const typewriter: Typewriter = (node, { speed = 1 } = {}) => {
		const text = node.textContent ?? '';
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	};

	const phrases = ['Hi!', "I am Sandro!"];

	let phrase = '';

	let phraseTimeout: number | null = null;

	onMount(() => {
		phrase = phrases[0];

		return () => {
			if (phraseTimeout !== null) {
				clearTimeout(phraseTimeout);
			}
		};
	});
</script>

<section id="about">
	{#key phrase}
		<p
			in:typewriter
			on:introend={() => {
				if (phrase === phrases[0]) {
					phraseTimeout = setTimeout(() => {
						phrase = phrases[1];
					}, 300);
				}
			}}
		>
			{phrase}
		</p>
	{/key}
</section>

<section id="experience">This is my Experience!!!</section>

<section id="skills">This is my Skills!!!</section>

<section id="education">This is my Education!!!</section>

<section id="projects">These are my projects!!!</section>

<style lang="scss">
	section {
		height: 100vh;

		&#about {
			background: #191d32;
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			font-size: 6em;
		}
	}
</style>
