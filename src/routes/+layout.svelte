<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import '../styles.scss';
	import Header from '$lib/components/Header.svelte';

	let mainElement: HTMLElement;

	const context = setContext('active-section', writable(''));

	onMount(() => {
		if (!mainElement) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if(entry.isIntersecting){
						$context = entry.target.id;
					}
				})
			},
			{ root: null, rootMargin: '-80px', threshold: 0.5 }
		);

		Array.from(mainElement.children).forEach(element => {
			observer.observe(element)
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header />

<main bind:this={mainElement}>
	<slot />
</main>

<style lang="scss">
</style>
