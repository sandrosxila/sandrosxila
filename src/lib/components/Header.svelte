<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const hash: Writable<string> = getContext('active-section');
</script>

<header>
	<nav>
		<li class:active={$hash === 'about'}>
			<a href="#about">About</a>
		</li>
		<li class:active={$hash === 'experience'}>
			<a href="#experience">Experience</a>
		</li>
		<li class:active={$hash === 'skills'}>
			<a href="#skills">Skills</a>
		</li>
		<li class:active={$hash === 'projects'}>
			<a href="#projects">Projects</a>
		</li>
		<li class:active={$hash === 'contact'}>
			<a href="#contact">Contact</a>
		</li>
	</nav>
</header>

<style lang="scss">
	nav {
		opacity: 1;

		z-index: 1000;
		width: 100vw;
		height: 80px;
		border-bottom: 2px solid black;
		box-sizing: border-box;
		background-color: white;
		justify-content: space-between;
		align-items: center;
		padding: 0 5%;
		gap: 8px;
		display: flex;
		position: fixed;
		top: 0;
		left: 0;

		@media screen and (min-width: 576px) {
			padding: 0 64px;
			gap: 0;
		}
	}

	a {
		text-decoration: none !important;
		color: black;
	}

	li {
		list-style: none;
		padding: 3px 6px;
	}

	.active {
		background-color: pink;
	}
</style>
