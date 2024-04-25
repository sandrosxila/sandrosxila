<script lang="ts">
	import { horizontalSwipe } from '$lib/actions/horizontalSwipe';
	import TimeLine from './TimeLine.svelte';
	let items = [
		{
			title: 'Software Developer',
			company: 'Alta Software',
			startDate: 'Oct 2020',
			description:
				'I was working on a big loan management software. There were ' +
				'implemented different logics for various types of loan lifecycles. ' +
				'The main clients for the company were banks. The system was ' +
				'based on Domain Driven Design. We were following Object-' +
				'Oriented Programming Principles and Design Patterns.'
		},
		{
			title: 'Middle Frontend React Developer',
			company: 'MiMa',
			startDate: 'Aug 2021',
			description:
				'The gambling app for live casino depended on CSS animations ' +
				'and the react-spring library. The animation was the most ' +
				'challenging part of this project because the app had to be fast, ' +
				'reliable, and performant. We had our own chat, which enabled ' +
				'users to talk with dealers. The chat was based on Socket.io.'
		},
		{
			title: 'Middle Front-End Developer',
			company: 'Georgian Service Group 2007',
			startDate: 'Apr 2022',
			description:
				'Worked on a Management Application using Antd library and ' +
				'Redux. Used Jenkins for CI/CD. The Application was full of ' +
				'complex forms with validations. The webpage had a Dashboard ' +
				'and calendar. The application was used by Zooplus Services.'
		},
		{
			title: 'Front-End Developer',
			company: 'Pollin',
			startDate: 'Sep 2022',
			description:
				"I've contributed to a clinic app project utilizing Next.js, where we integrated " +
				'Material UI for frontend design and implemented server-side rendering (SSR) ' +
				'to enhance performance. This ensured a seamless user experience with ' +
				'optimized page loading and improved search engine visibility.'
		},
		{
			title: 'Front-End Developer',
			company: 'Productive Edge',
			startDate: 'Present',
			description:
				'Worked with a big mono repo project. Used Lerna as a mono repo tool, RTK ' +
				'with redux-observable (based on rxJs) for state management, Storybook and ' +
				'Stencil for private UI library, and react-hook-form for managing forms. ' +
				'Strictly followed SRP, KISS, DRY, and OCP.'
		}
	];

	let activeLineItem = items.length - 1;

	function changeActiveLineItem(event: CustomEvent<{ activeLineItem: number }>) {
		activeLineItem = event.detail.activeLineItem;
	}

	function handleSwipeLeft() {
		activeLineItem = Math.min(activeLineItem + 1, items.length - 1);
	}

	function handleSwipeRight() {
		activeLineItem = Math.max(0, activeLineItem - 1);
	}
</script>

<div class="layout">
	<TimeLine on:itemChange={changeActiveLineItem} {activeLineItem} {items} />
	<div
		class="content-wrapper"
		use:horizontalSwipe
		on:swipeLeft={handleSwipeLeft}
		on:swipeRight={handleSwipeRight}
	>
		<div class="content-box" style:--active-item={activeLineItem}>
			{#each items as item}
				<div class="content">
					<h2 class="title">{item.title}</h2>
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
		width: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		justify-content: center;
		color: white;
		flex: 0 0 100%;
		width: 100%;
		p {
			margin: 0 20%;
		}
	}

	.title {
		text-align: center;
	}
</style>
