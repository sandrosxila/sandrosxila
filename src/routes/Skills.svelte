<script lang="ts">
	import NestLogo from '$lib/icons/NestLogo.svelte';
	import NextLogo from '$lib/icons/NextLogo.svelte';
	import ReactLogo from '$lib/icons/ReactLogo.svelte';
	import SvelteLogo from '$lib/icons/SvelteLogo.svelte';
	import ExpressLogo from '$lib/icons/ExpressLogo.svelte';
	import JavaScriptLogo from '$lib/icons/JavaScriptLogo.svelte';
	import TypeScriptLogo from '$lib/icons/TypeScriptLogo.svelte';
	import CppLogo from '$lib/icons/CppLogo.svelte';
	import CSharpLogo from '$lib/icons/CSharpLogo.svelte';
	import PythonLogo from '$lib/icons/PythonLogo.svelte';
	import HtmlLogo from '$lib/icons/HtmlLogo.svelte';
	import SassLogo from '$lib/icons/SassLogo.svelte';
	import TSqlLogo from '$lib/icons/TSqlLogo.svelte';

	const languages = [JavaScriptLogo, TypeScriptLogo, CppLogo, CSharpLogo, PythonLogo];
	const frameworks = [ReactLogo, NextLogo, SvelteLogo, NestLogo, ExpressLogo];
	const other = [HtmlLogo, SassLogo, TSqlLogo];
</script>

<div class="layout">
	<section>
		<h2>Languages</h2>

		<div class="cards">
			{#each languages as logoComponent}
				<div class="card">
					<div class="logo">
						<svelte:component this={logoComponent} />
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section>
		<h2>Frameworks</h2>

		<div class="cards">
			{#each frameworks as logoComponent}
				<div class="card">
					<div class="logo">
						<svelte:component this={logoComponent} />
					</div>
				</div>
			{/each}
		</div>
	</section>
	<section>
		<h2>Other Technologies</h2>

		<div class="cards">
			{#each other as logoComponent}
				<div class="card">
					<div class="logo">
						<svelte:component this={logoComponent} />
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>

<style lang="scss">
	.layout {
		height: 100%;
		width: 100%;
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
		height: 160px;
		aspect-ratio: 1 / 1;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 0.75rem;
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
