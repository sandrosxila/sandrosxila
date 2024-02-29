<script lang="ts">
	import TimeLine from './TimeLine.svelte';
	let items = [
		{
			title: 'Software Developer',
			company: 'Alta Software',
			startDate: 'Oct 2020',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident hic necessitatibus nesciunt' +
				'asperiores illo recusandae dolorem quae corporis veritatis veniam dignissimos itaque, eum' +
				'voluptate debitis ipsa ea vel facilis. Autem?'
		},
		{
			title: 'Middle Frontend React Developer',
			company: 'MiMa',
			startDate: 'Aug 2021',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident hic necessitatibus nesciunt' +
				'asperiores illo recusandae dolorem quae corporis veritatis veniam dignissimos itaque, eum' +
				'voluptate debitis ipsa ea vel facilis. Autem?'
		},
		{
			title: 'Middle Front-End Developer',
			company: 'Georgian Service Group 2007',
			startDate: 'Apr 2022',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident hic necessitatibus nesciunt' +
				'asperiores illo recusandae dolorem quae corporis veritatis veniam dignissimos itaque, eum' +
				'voluptate debitis ipsa ea vel facilis. Autem?'
		},
		{
			title: 'Front-End Developer',
			company: 'Productive Edge',
			startDate: 'Oct 2022',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident hic necessitatibus nesciunt' +
				'asperiores illo recusandae dolorem quae corporis veritatis veniam dignissimos itaque, eum' +
				'voluptate debitis ipsa ea vel facilis. Autem?'
		}
	];

	let activeLineItem = items.length - 1;
	console.log(activeLineItem);
</script>

<div class="layout">
	<TimeLine bind:activeLineItem itemsLength={items.length} />
	<div class="content-wrapper">
		<div class="content-box" style:--active-item={activeLineItem}>
			{#each items as item}
				<div class="content">
					<h2>{item.title}</h2>
					<em> {item.company} </em>
					<p>
						{item.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.layout {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.content-wrapper {
		display: flex;
		overflow: hidden;
		width: 100%;
	}

	.content-box {
		$activeItem: var(--active-item);

		transform: translateX(calc(-1 * 100% * ($activeItem)));
        transition: transform 0.4s ease-in-out;

		display: flex;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		justify-content: center;
		color: white;
		flex: 0 0 100%;

		p {
			margin: 0 20%;
		}
	}
</style>
