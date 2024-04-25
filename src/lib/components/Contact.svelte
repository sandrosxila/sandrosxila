<div class="layout">
	<h1 class="title">Contact Me</h1>
    <div class="button-group">
        <a class="link-button linked-in" target="_blank" href="https://www.linkedin.com/in/sandrosxila">LinkedIn</a>
        <a class="link-button discord"  target="_blank" href="https://www.discord.com/users/709414278012076033">Discord</a>
    </div>
</div>

<style lang="scss">
    @use 'sass:color';

	.layout {
		height: 100%;
		width: 100%;
		display: flex;
        flex-direction: column;
		align-items: center;
		justify-content: center;
	}

    .title {
        color: white;
        font-size: 3rem;
        margin-bottom: 5rem;

        @media screen and (min-width: 576px) {
            font-size: 4rem;
        }
    }

    .button-group {
        display: flex;
        gap: 1rem;
    }

    .link-button {
        display: inline-flex;
		align-items: center;
		justify-content: center;
        padding: 1rem;
        background-color: crimson;
        color: white;
        transition: background-color 0.15s ease-in-out;
    }

    .linked-in {
        background-color: #0077b5;

        &:hover {
            background-color: color.adjust(#0077b5, $lightness: -5%);
        }
    }

    .discord {
        background-color: #7289da;

        &:hover {
            background-color: color.adjust(#7289da, $lightness: -5%);
        }
    }

</style>
