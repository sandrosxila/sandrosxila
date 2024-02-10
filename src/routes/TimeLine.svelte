<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let activeLineItem: number;
	export let items: {title: string, company: string, startDate: string, description: string}[];

	const dispatch = createEventDispatcher();

	function onActiveLineItemChange(activeLineItem: number) {
		dispatch('itemChange', {
			activeLineItem
		});
	}
</script>

<div class="timeline">
	<div class="line-wrapper">
		{#each items as item, i}
			<button
				style:--left="{20 + i * 15}%"
				class="line-item"
				class:active-line-item={activeLineItem == i}
				on:click={() => onActiveLineItemChange(i)}
			>
				<span>{item.startDate}</span>
			</button>
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

		span {
			position: absolute;
			white-space:nowrap;
			top: -25px;
			left: 50%;
			transform: translate(-50%, 0);
			color: white;
			font-size: 0.7rem;
		}
	}

	.active-line-item {
		background-color: white;
	}
</style>
