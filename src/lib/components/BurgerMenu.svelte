<script lang="ts">
	import { trapFocus } from '$lib/actions/trapFocus';

	let active = false;

	function onMenuClick() {
		active = !active;
	}

	function onLinkInteraction() {
		active = false;
	}
</script>

<svelte:window
	on:wheel|nonpassive={(e) => {
		if (active) e.preventDefault();
	}}
/>

<div class="wrapper">
	<button class="menu-button" class:active on:click={onMenuClick}>
		<span class="line" />
		<span class="line" />
		<span class="line" />
	</button>
</div>

<div class="menu" class:menu-active={active} use:trapFocus>
	<nav class="menu-nav">
		<li class="menu-item">
			<a
				class="menu-link"
				href="#about"
				on:keypress={onLinkInteraction}
				on:click={onLinkInteraction}>About</a
			>
		</li>
		<li class="menu-item">
			<a
				class="menu-link"
				href="#experience"
				on:keypress={onLinkInteraction}
				on:click={onLinkInteraction}>Experience</a
			>
		</li>
		<li class="menu-item">
			<a
				class="menu-link"
				href="#skills"
				on:keypress={onLinkInteraction}
				on:click={onLinkInteraction}>Skills</a
			>
		</li>
		<li class="menu-item">
			<a
				class="menu-link"
				href="#projects"
				on:keypress={onLinkInteraction}
				on:click={onLinkInteraction}>Projects</a
			>
		</li>
		<li class="menu-item">
			<a
				class="menu-link"
				href="#contact"
				on:keypress={onLinkInteraction}
				on:click={onLinkInteraction}>Contact</a
			>
		</li>
	</nav>
</div>

<style lang="scss">
	.wrapper {
		position: fixed;
		top: 24px;
		right: 24px;

		height: 32px;
		width: 32px;

		background: white;

		padding: 8px;

		border: 4px solid black;
		z-index: 3;
	}

	.menu-button {
		width: 100%;
		height: 100%;
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		position: relative;

		&.active {
			.line:first-child {
				position: absolute;
				transform: rotate(45deg);
			}

			.line:nth-child(2) {
				opacity: 0;
			}

			.line:last-child {
				position: absolute;
				transform: rotate(-45deg);
			}
		}
	}

	.line {
		height: 4px;
		width: 100%;
		background: black;
		cursor: pointer;
	}

	.menu {
		position: fixed;
		z-index: 2;

		top: 0;
		right: 0;

		box-sizing: border-box;
		border: 4px solid black;

		width: 100vw;
		height: 100vh;

		background: white;

		transform: translate(100%, 0);
		transition: transform 0.35s cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	.menu-active {
		transform: translate(0%, 0);
	}

	.menu-nav {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 80px;
		gap: 8px;
	}

	.menu-item {
		list-style: none;
	}

	.menu-link {
		color: black;
		font-size: 2rem;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
