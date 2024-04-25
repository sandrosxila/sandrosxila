<script lang="ts">
	import reactBTreeImage from '$lib/assets/images/react-b-tree.png';
	import twoDSegmentTreeImage from '$lib/assets/images/2d-segment-tree.png';
	import blogPostsImage from '$lib/assets/images/blog-posts.png';
	import doublyLinkedListImage from '$lib/assets/images/doubly-linked-list.png';
	import parserCalculatorImage from '$lib/assets/images/parser-calculator.png';
	import eventLoopMnemonicImage from '$lib/assets/images/event-loop-mnemonic.png';

	const projects = [
		{
			src: reactBTreeImage,
			title: 'React B-Tree Visualization',
			description: 'B-Tree Visualization in React',
			url: 'https://react-b-tree-visualization.netlify.app/',
			tags: ['React', 'Data Structures']
		},
		{
			src: twoDSegmentTreeImage,
			title: '2D segment Visualization',
			description: 'Two Dimensional segment Visualization in Three.JS.',
			url: 'https://2d-segment-tree-visualization.vercel.app/',
			tags: ['Three.JS', 'Next.JS', 'Data Structures']
		},
		{
			src: blogPostsImage,
			title: 'Blog Posts',
			description: 'Full-Stack Monorepo project in React and Nest.JS',
			url: 'https://github.com/sandrosxila/blog-posts',
			tags: ['React', 'Nest.JS', 'Nx']
		},
		{
			src: doublyLinkedListImage,
			title: 'Doubly Linked List',
			description: 'Doubly-Linked-List implementation in Rust',
			url: 'https://github.com/sandrosxila/doubly-linked-list',
			tags: ['Rust', 'Data Structures']
		},
		{
			src: parserCalculatorImage,
			title: 'Parser Calculator',
			description:
				'The calculator uses parser tree which is a good example of Interpreter Design Pattern usage.',
			url: 'https://github.com/sandrosxila/parser-calculator',
			tags: ['Python', 'Data Structures']
		},
		{
			src: eventLoopMnemonicImage,
			title: 'Event Loop Mnemonic',
			description:
				"You don't need to read thousands of articles about the event loop. If you ever forget how event loop works, run this example and you will see the order of events.",
			url: 'https://github.com/sandrosxila/event-loop-mnemonic',
			tags: ['Node.JS', 'Async']
		}
	];
</script>

<div class="layout">
	<div class="container">
		{#each projects as { src, title, description, tags, url }}
			<div class="card">
				<div class="image-wrapper">
					<img {src} alt={title} />
				</div>
				<h3 class="title">{title}</h3>
				<p class="description">{description}</p>
                <div class="tags-container">
					{#each tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
				<a class="link" href={url}>View the project</a>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@use 'sass:color';
	
	.layout {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
        overflow-x: auto;
	}

	.container {
		display: flex;
        flex-direction: column;
        justify-content: center;
		flex-wrap: wrap;
        height: 100%;
		gap: 0.5rem;
        &::before, &::after {
            content: '';
            height: 100%;
            width: 60px;
        }
	}

	.card {
		width: 300px;
		background-color: white;
		display: flex;
		flex-direction: column;
		font-size: 1.5rem;
		padding: 1rem;
		gap: 0.45rem;
        height: 320px;
        border-radius: 0.5rem;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        margin-top: 0.75rem;
        margin-bottom: auto;
	}

	.title {
		color: black;
		margin: 0;
		font-size: 1.2rem;
	}

	.description {
		font-size: 1rem;
		color: black;
        margin: 0;
	}

	.link {
		font-size: 1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.4rem 0.55rem;
        border-radius: 0.35rem;
        cursor: pointer;
        background-color: #3D3854;
        color: white;
        text-decoration: none;
        margin-top: auto;


        &:hover {
            background-color: color.adjust(#3D3854, $lightness: -5%);
        }
	}

	.tags-container {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.25rem;
	}

	.tag {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #464860;
		color: white;
		border-radius: 4rem;
		font-size: 0.8rem;
		padding: 0.4rem 0.55rem;
	}

	.image-wrapper {
		height: 120px;
		display: flex;
		overflow: hidden;

		img {
            width: 100%;
			object-fit: cover;
            object-position: top;
			&:hover {
				transform: scale(1.5) translateY(15%);
			}
            transition: transform 0.25s ease;
		}
	}
</style>
