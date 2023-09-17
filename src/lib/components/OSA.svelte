<script lang="ts">
	import { fade } from 'svelte/transition';

	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
	console.log(form);
</script>

<section>
	<h2 id="osa">Om svar anhålles</h2>
	<p>O.s.a senast första mars 2024.</p>
	<p>En person per formulär.</p>

	<form method="post" use:enhance>
		<div class="mb-4">
			<label for="name">För- och efternamn</label>
			<input
				id="name"
				name="name"
				placeholder="För- och efternamn"
				type="text"
				value={form?.name ?? ''}
				required
			/>
		</div>
		<div class="mb-4">
			<label for="phoneNumber">Telefonnummer</label>

			<input
				id="phoneNumber"
				name="phoneNumber"
				placeholder="Telefonnummer"
				type="text"
				value={form?.phoneNumber ?? ''}
				required
			/>
		</div>

		<div class="mb-4">
			<label for="email">Email</label>

			<input
				id="email"
				name="email"
				placeholder="Email"
				type="email"
				value={form?.email ?? ''}
				required
			/>
		</div>

		<div class="mb-4">
			<label for="foodPreference">Allergier eller matpreferenser</label>
			<input
				id="foodPreference"
				placeholder="Allergier eller matpreferenser"
				name="foodPreference"
				type="text"
				value={form?.foodPreference ?? ''}
			/>
		</div>
		<div class="mb-4">
			<label for="password">Lösenordet som står i inbjudan</label>
			<input
				id="password"
				placeholder="********"
				name="password"
				type="password"
				value={form?.password ?? ''}
				required
			/>
		</div>
		<button class="send-response" type="submit">OSA</button>
		{#if form?.success}
			<div transition:fade class="message success">Tack för din anmälan {form.person}</div>
		{/if}
		{#if form?.wrongPassword}
			<div transition:fade class="message password">Fel lösenord</div>
		{/if}
	</form>
</section>

<style>
	.message {
		margin: 1rem 0;
		border: 1px solid black;
		border-radius: 6px;
		padding: 1rem;
		color: black;
	}
	§.password {
		background: #f8aeae;
	}

	.success {
		background: #aef8ae;
	}
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
