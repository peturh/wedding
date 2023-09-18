<script lang="ts">
	let appended = false;
	function actionWhenInViewport(e: any) {
		const observer = new IntersectionObserver((entries) => {
			console.log('in view', entries);
			if (entries[0].isIntersecting && appended === false) {
				let wrapper = document.getElementById('map-wrapper');
				let iframe = document.createElement('iframe');
				iframe.setAttribute('title', 'Karta över platser');
				iframe.setAttribute(
					'src',
					'https://storage.googleapis.com/maps-solutions-u7luppubmm/locator-plus/7su7/locator-plus.html'
				);
				iframe.setAttribute('height', '100%');
				iframe.setAttribute('width', '100%');
				iframe.setAttribute('style', 'border:0');
				iframe.setAttribute('loading', 'lazy');
				wrapper?.append(iframe);
				appended = true;
			}
		});

		observer.observe(e);
	}
</script>

<section>
	<h2 id="karta">Hitta hit</h2>
	<div id="map-wrapper" class="map-wrapper" use:actionWhenInViewport />
</section>

<style lang="less">
	.map-wrapper {
		height: 800px;
	}
</style>
