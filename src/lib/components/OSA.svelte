<script lang="ts">
	import { fade } from 'svelte/transition';

	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import dayjs from 'dayjs';
	export let form: ActionData;
	const now = dayjs();
	const secondOfMarch = dayjs('2024-03-02');
	export let openRSVP = now.diff(secondOfMarch) < 0 ? true : false;
</script>

<h2 id="osa">Om svar anhålles</h2>

{#if openRSVP}
	<section>
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
			<button class="send-response" type="submit">Skicka in</button>
			{#if form?.success}
				<div transition:fade class="message success">Tack för din anmälan {form.person}</div>
			{/if}
			{#if form?.wrongPassword}
				<div transition:fade class="message password">Fel lösenord</div>
			{/if}
		</form>
	</section>
{:else}
	<section>
		<h3>Ni kan tyvärr inte längre anmäla er.</h3>
		<h3>Om Ni får förhinder kontakta Pétur eller Lisa via telefon eller SMS</h3>
	</section>
{/if}

<style>
	.message {
		margin: 1rem 0;
		border: 1px solid black;
		border-radius: 6px;
		padding: 1rem;
		color: black;
	}
	.password {
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
