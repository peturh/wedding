<script lang="ts">
	import Divider from './Divider.svelte';
</script>

<section class="top-section">
	<div class="pre-title">Välkommen till</div>
	<div class="pre-title">bröllop mellan</div>
	<h1 class="title">Lisa <span class="ampersand">&</span> Pétur</h1>
	<div class="pre-title">Första juni 2024</div>
</section>
<Divider />
<section>
	<h2 id="info">Information</h2>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Tid <span class="ampersand">&</span> Plats</div>
		<div class="col-span-4 mx-4">
			Vigseln hålls i Löddeköpinge kyrka kl 14.30 efterföljt av bröllopsfest och middag på
			Västrahögsgården i Hög.
		</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Presenter</div>
		<div class="col-span-4 mx-4">
			Er närvaro är gåva nog, men om ni vill ge oss någonting önskar vi oss ett bidrag till vår
			bröllopsresa.
		</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Klädsel</div>
		<div class="col-span-4 mx-4">Sommarfin klädsel</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1">
		<div class="col-span-2 text-right">Barn</div>
		<div class="col-span-4 mx-4">Vigseln och festen är barnfri, med undantag för ammande barn.</div>
	</div>

	<p />
</section>

<style lang="less">
	#info {
		margin-bottom: 1rem;
	}
	.pre-title {
		font-family: 'Petit Formal Script', cursive;
		font-size: 18px;
		margin: 1rem auto;
		letter-spacing: 0;
		text-align: center;
	}

	.ampersand {
		font-family: 'Petit Formal Script', cursive;
	}
	.top-section {
		margin: 0 auto;
	}
	.title {
		margin: 0 auto;
	}

	.grid {
		font-size: 20px;
	}
</style>
