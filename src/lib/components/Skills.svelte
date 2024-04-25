<script lang="ts">
	import NestLogo from '$lib/assets/icons/NestLogo.svelte';
	import NextLogo from '$lib/assets/icons/NextLogo.svelte';
	import ReactLogo from '$lib/assets/icons/ReactLogo.svelte';
	import SvelteLogo from '$lib/assets/icons/SvelteLogo.svelte';
	import ExpressLogo from '$lib/assets/icons/ExpressLogo.svelte';
	import JavaScriptLogo from '$lib/assets/icons/JavaScriptLogo.svelte';
	import TypeScriptLogo from '$lib/assets/icons/TypeScriptLogo.svelte';
	import CppLogo from '$lib/assets/icons/CppLogo.svelte';
	import CSharpLogo from '$lib/assets/icons/CSharpLogo.svelte';
	import PythonLogo from '$lib/assets/icons/PythonLogo.svelte';
	import HtmlLogo from '$lib/assets/icons/HtmlLogo.svelte';
	import SassLogo from '$lib/assets/icons/SassLogo.svelte';
	import TSqlLogo from '$lib/assets/icons/TSqlLogo.svelte';
	import GraphQlLogo from '$lib/assets/icons/GraphQlLogo.svelte';

	const skills = [
		{
			title: 'Languages',
			logos: [
				{ component: JavaScriptLogo, title: 'JavaScript' },
				{ component: TypeScriptLogo, title: 'TypeScript' },
				{ component: CppLogo, title: 'C++' },
				{ component: CSharpLogo, title: 'C#' },
				{ component: PythonLogo, title: 'Python' }
			]
		},
		{
			title: 'Frameworks',
			logos: [
				{ component: ReactLogo, title: 'React.JS' },
				{ component: NextLogo, title: 'Next.JS' },
				{ component: SvelteLogo, title: 'Svelte' },
				{ component: NestLogo, title: 'Nest.JS' },
				{ component: ExpressLogo, title: 'Express.JS' }
			]
		},
		{
			title: 'Other Technologies',
			logos: [
				{ component: HtmlLogo, title: 'HTML' },
				{ component: SassLogo, title: 'Sass' },
				{ component: TSqlLogo, title: 'Microsoft SQL' },
				{ component: GraphQlLogo, title: 'GraphQL' }
			]
		}
	];
</script>

<div class="layout">
	{#each skills as { title, logos }}
		<section>
			<h2>{title}</h2>

			<div class="cards">
				{#each logos as { component, title }}
					<div class="card" {title}>
						<div class="logo" >
							<svelte:component this={component} />
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style lang="scss">
	.layout {
		height: 100%;
		padding: 0 5%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: white;
	}

	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.cards {
		width: 100%;
		display: flex;
		gap: 20px;
		justify-content: center;
	}

	.card {
		width: 160px;
		aspect-ratio: 1 / 1;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 0.75rem;
		position: relative;
	}

	.logo {
		width: 60%;
		height: 60%;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
