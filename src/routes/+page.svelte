<script lang="ts">
	import '../app.css';

	import Info from '$lib/components/Info.svelte';
	import Osa from '$lib/components/OSA.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hotels from '$lib/components/Hotels.svelte';
	import Map from '$lib/components/Map.svelte';
	import Divider from '$lib/components/Divider.svelte';

	import type { ActionData } from './$types';
	export let form: ActionData;
	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"
	injectSpeedInsights();
</script>

<!-- <Header /> -->
<Info />
<Divider />
<Osa {form} />
<Divider />
<Contact />
<Divider />
<Hotels />
<Divider />
<Map />
