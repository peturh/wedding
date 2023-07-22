<script lang="ts">
</script>

<header>
	<div class="link-container">
		<a href="#info">Info</a>
		<a href="#osa">OSA</a>
		<a href="#kontakt">Kontakt</a>
		<a href="#bo">Bo</a>
		<a href="#karta">Karta</a>
	</div>
</header>

<style lang="less">
	header {
		position: fixed;
		background: white;
		top: 4rem;
		left: 50%;
		right: 50%;
		width: 800px;
		transform: translate(-50%, -50%);
	}
	.link-container {
		margin: 0 auto;
		display: flex;
		justify-content: space-evenly;
		padding: 2rem;
	}

	a {
		font-size: 30px;
		font-weight: 700;
		color: rgb(48, 48, 48);
		font-style: italic;

		&:hover {
			text-decoration: none;
		}

		&:visited {
			color: rgb(48, 48, 48);
		}
	}
</style>
