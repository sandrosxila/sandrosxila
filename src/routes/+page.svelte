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
	$block-margin: 80px;
	section {
		height: 100vh;
		scroll-snap-align: start;
		scroll-margin-block-start: $block-margin;
		scroll-margin-block-end: -#{$block-margin};
		display: flex;
		overflow: hidden;

		&#about {
			background: #191d32;

			.container {
				margin-bottom: 0;
			}
		}

		&#experience {
			background: #57375a;
		}

		&#skills {
			background: #a0526c;
		}

		&#projects {
			background: #de796a;
		}

		&#contact {
			background: #feb360;
		}

		&:last-child {
			height: calc(100vh - #{$block-margin});
			padding-bottom: 0;
		}
	}

	.container {
		flex-grow: 1;
		margin-bottom: $block-margin;
		overflow: hidden;
	}
</style>
