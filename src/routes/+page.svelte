<script lang="ts">
	import type { TransitionConfig } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Experience from './Experience.svelte';
	import Skills from './Skills.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';

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

	const phrases = ['Hi!', 'I am Sandro!'];

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
	<div class="container centered-text">
		{#key phrase}
			<p
				class="kalam-regular"
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
	</div>
</section>

<section id="experience">
	<div class="container">
		<Experience />
	</div>
</section>

<section id="skills">
	<div class="container">
		<Skills />
	</div>
</section>

<section id="projects">
	<div class="container">
		<Projects />
	</div>
</section>

<section id="contact">
	<div class="container">
		<Contact />
	</div>
</section>

<style lang="scss">
	section {
		height: 100vh;
		scroll-snap-align: start;
		scroll-margin-block-start: 80px;
		scroll-margin-block-end: -80px;
		display: flex;
		overflow: hidden;

		&#about {
			background: #191d32;

			.container {
				margin-bottom: 0;
			}
		}

		&#experience {
			background: #57375a;
		}

		&#skills {
			background: #a0526c;
		}

		&#projects {
			background: #de796a;
		}

		&#contact {
			background: #feb360;
		}

		&:last-child {
			height: calc(100vh - 80px);
			padding-bottom: 0;
		}
	}

	.container {
		flex-grow: 1;
		margin-bottom: 80px;
		overflow: hidden;
	}

	.centered-text {
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 6em;
	}
</style>
