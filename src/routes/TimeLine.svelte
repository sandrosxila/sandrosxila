<script lang="ts">
	export let activeLineItem: number;
	export let itemsLength: number;
</script>

<div class="timeline">
	<div class="line-wrapper">
		{#each Array.from({ length: itemsLength }) as _, i}
			<button
				style:--left="{20 + i * 20}%"
				class="line-item"
				class:active-line-item={activeLineItem == i}
				on:click={() => {activeLineItem = i}}
			></button>
		{/each}
	</div>
</div>

<style lang="scss">
	$background-color: #57375a;

	.timeline {
		position: relative;
		height: 100px;
		width: 90%;
		max-width: 800px;
		margin: 0 auto;
		/* border: 1px solid white; */
	}

	.line-wrapper {
		position: relative;
		height: 3px;
		width: 100%;
		background: white;
		left: 0;
		top: 50%;
		/* overflow-x: hidden; */

		&::before {
			position: absolute;
			content: '';
			left: 0;
			background-image: linear-gradient(to right, $background-color, transparent);
			width: 180px;
			height: 100%;
		}

		&::after {
			position: absolute;
			content: '';
			right: 0;
			background-image: linear-gradient(to right, transparent, $background-color);
			width: 180px;
			height: 100%;
		}
	}

	.line-item {
		all: unset;
		outline: revert;

		left: var(--left);
		border-radius: 50%;
		background-color: $background-color;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 16px;
		height: 16px;
		box-sizing: border-box;
		border: 2px solid white;
		cursor: pointer;
		z-index: 1;
	}

	.active-line-item {
		background-color: white;
	}
</style>
