<script lang="ts">
    let scrollY = 0;
	let navTop = 0;
	let isTicking = false;
    const headerHeight = 80;
</script>

<svelte:window
	on:scroll={() => {
		if (!isTicking) {
            isTicking = true;
			requestAnimationFrame(() => {
				const diff = Math.abs(scrollY - window.scrollY);
				// scrolling down
				if (scrollY < window.scrollY) {
					navTop = Math.max(-headerHeight, navTop - diff);
				} else {
					navTop = Math.min(0, navTop + diff);
				}
				scrollY = window.scrollY;
                isTicking = false;
			});
		}
	}}
/>

<header>
	<nav style:--top="{navTop}px">
		<a href="#about">about</a>
		<a href="#experience">experience</a>
		<a href="#skills">skills</a>
		<a href="#education">Education</a>
		<a href="#projects">Projects</a>
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
		padding: 0 64px;
		display: flex;
		position: fixed;
		transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
		transform: translateY(var(--top));
		top: 0;
		left: 0;
	}
</style>