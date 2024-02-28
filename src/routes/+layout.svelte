<script lang="ts">
	import '../styles.scss';
	import Header from './Header.svelte';
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

<main>
	<slot />
</main>

<style lang="scss">
</style>
