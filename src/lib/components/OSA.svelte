<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<section>
	<h2 id="osa">Om svar anhålles</h2>
	<p>O.s.a senast 1 mars 2024 i formuläret nedan.</p>

	<form method="post">
		{#if form?.missing}<p class="error">Missing field required!</p>{/if}
		<div class="mb-4">
			<label for="name">Namn</label>
			<input name="name" placeholder="Namn" type="text" value={form?.name ?? ''} />
		</div>
		<div class="mb-4">
			<label for="phoneNumber">Telefonnummer</label>

			<input
				name="phoneNumber"
				placeholder="Telefonnummer"
				type="text"
				value={form?.phoneNumber ?? ''}
			/>
		</div>

		<div class="mb-4">
			<label for="email">Email</label>

			<input name="email" placeholder="Email" type="email" value={form?.email ?? ''} />
		</div>

		<div class="mb-4">
			<label for="fullVegetarian">Äter bara vegetariskt</label>

			<input name="fullVegeterian" type="checkbox" value={form?.fullVegeterian ?? ''} />
		</div>
		<div class="mb-4">
			<label for="foodPreference">Allergier eller matpreferenser</label>
			<input name="foodPreference" type="text" value={form?.foodPreference ?? ''} />
		</div>
		<div class="mb-4">
			<label for="password">Lösenord som finns i inbjudan</label>
			<input name="password" type="password" value={form?.password ?? ''} />
		</div>
		<button class="send-response" type="submit">OSA</button>
	</form>
</section>

<style>
	.send-response {
		width: 100%;
		border: 1px solid black;
		border-radius: 6px;
		padding: 10px;
		box-shadow: 1px 1px 1px black;
		&:hover {
			box-shadow: none;
		}
	}
</style>
