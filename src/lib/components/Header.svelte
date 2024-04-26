<script lang="ts">
	import BurgerMenu from './BurgerMenu.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const hash: Writable<string> = getContext('active-section');

	let innerWidth = 0;

	$: isMobile = innerWidth <= 576;
</script>

<svelte:window bind:innerWidth />

{#if isMobile}
	<BurgerMenu />
{/if}

<header>
	<nav>
		<li class={$hash === 'about' ? 'active' : 'inactive'}>
			<a href="#about">About</a>
		</li>
		<li class={$hash === 'experience' ? 'active' : 'inactive'}>
			<a href="#experience">Experience</a>
		</li>
		<li class={$hash === 'skills' ? 'active' : 'inactive'}>
			<a href="#skills">Skills</a>
		</li>
		<li class={$hash === 'projects' ? 'active' : 'inactive'}>
			<a href="#projects">Projects</a>
		</li>
		<li class={$hash === 'contact' ? 'active' : 'inactive'}>
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
		transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
		transform: translateY(-100%);
		padding: 0 5%;
		gap: 8px;
		display: flex;
		position: fixed;
		top: 0;
		left: 0;

		@include app.mobileScreen {
			padding: 0 64px;
			gap: 0;
			transform: translateY(0);
		}
	}

	.inactive {
		a{
			text-decoration: none !important;
		}
	}

	li {
		list-style: none;
		padding: 3px 6px;
	}

	.active {
		a {
			text-decoration: underline !important;
		}
	}
</style>
