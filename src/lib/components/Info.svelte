<script lang="ts">
	import Divider from './Divider.svelte';
</script>

<section class="top-section">
	<div class="pre-title">Välkomna på</div>
	<div class="pre-title">bröllop mellan</div>
	<h1 class="title">Lisa <span class="ampersand">&</span> Pétur</h1>
	<div class="pre-title">Första juni 2024</div>
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
</style>
