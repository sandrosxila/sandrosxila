<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<section id="about">
	<div class="container">
		<About />
	</div>
</section>

<section id="experience">
	<div class="container">
		<Experience />
	</div>
</section>

<section id="skills">
	<div class="container">
		<Skills />
	</div>
</section>

<section id="projects">
	<div class="container">
		<Projects />
	</div>
</section>

<section id="contact">
	<div class="container">
		<Contact />
	</div>
</section>

<style lang="scss">
	section {
		--block-margin: 0px;

		@include app.mobileScreen {
			--block-margin: 80px;
		}

		$block-margin: var(--block-margin);

		height: 100vh;
		scroll-snap-align: start;
		scroll-margin-block-start: $block-margin;
		scroll-margin-block-end: calc(-1 * #{$block-margin});
		display: flex;
		overflow: hidden;

		&#about {
			background: #8d2e62;

			.container {
				margin-bottom: 0;
			}
		}

		&#experience {
			background: #000;
		}

		&#skills {
			background: #FF5992;
		}

		&#projects {
			background: #5da2d5;
		}

		&#contact {
			background: #feb360;
		}

		&:last-child {
			height: calc(100vh - #{$block-margin});
			padding-bottom: 0;
		}

		.container {
			flex-grow: 1;
			margin-bottom: $block-margin;
			overflow: hidden;
		}
	}
</style>
