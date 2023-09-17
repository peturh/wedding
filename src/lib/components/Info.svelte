<script lang="ts">
	import Divider from './Divider.svelte';
</script>

<section class="top-section">
	<h5>Bröllop för</h5>
	<h1 class="title">Lisa <span class="ampersand">&</span> Pétur</h1>
	<h5>Första juni 2024</h5>
</section>
<Divider />
<section>
	<h2 id="info">Information</h2>
	<p>
		Vigseln hålls i Löddeköpinge kyrka och startar kl.14.30 efterföljt av bröllopsfest och middag på
		Västrahögsgården i Hög.
	</p>
	<div class="info-title">Klädsel</div>
	<p>Sommarfin klädsel</p>
	<div class="info-title">Presenter</div>
	<p>
		Er närvaro är gåva nog, men om ni vill ge oss någonting önskar vi oss ett bidrag till vår
		bröllopsresa.
	</p>
	<div class="info-title">Barn</div>
	<p>Vigseln och festen är barnfri, med undantag för ammande barn.</p>
</section>

<style lang="less">
	h5 {
		letter-spacing: 0;
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
</style>
