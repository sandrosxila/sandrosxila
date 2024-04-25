<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const hash: Writable<string> = getContext('active-section');
</script>

<header>
	<nav>
		<a href="#about" class:active={$hash === 'about'}>About</a>
		<a href="#experience" class:active={$hash === 'experience'}>Experience</a>
		<a href="#skills" class:active={$hash === 'skills'}>Skills</a>
		<a href="#projects" class:active={$hash === 'projects'}>Projects</a>
		<a href="#contact" class:active={$hash === 'contact'}>Contact</a>
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
		transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
		top: 0;
		left: 0;

		@media screen and (min-width: 576px) {
			padding: 0 64px;
			gap: 0;
		}
	}

	a {
		text-decoration: none !important;

		&:visited.active::after{
			background: purple;
		}

		&.active::after{
			background: blue;
		}
	}

	.active {
		position: relative;

		&::after {
			content: '';
			width: 100%;
			height: 1px;
			
			position: absolute;
			bottom: 2px;
			left: 0;
		}
	}
</style>