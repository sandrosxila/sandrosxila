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

<div class="wrapper">
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

<style>
    .wrapper {
        display: flex;
        flex-grow: 1;
        height: 100%;
		align-items: center;
		justify-content: center;
		color: white;
        font-size: 3em;

        @media screen and (min-width: 576px) {
            font-size: 6em;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->