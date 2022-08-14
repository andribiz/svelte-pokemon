<script lang="ts">
	import { pokaStore } from '../stores/pokemon';
	import type { Pokemon } from '../stores/pokemon';
	import Card from '../components/card.svelte';
	let searchTerm = '';
	let filteredPokemon: Pokemon[];

	$: {
		// console.log($pokaStore);
		if (searchTerm) {
			filteredPokemon = $pokaStore.filter((item) =>
				item.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = $pokaStore;
		}
	}
</script>

<svelte:head><title>Pokemon</title></svelte:head>
<h1 class="text-4xl text-center my-3 uppercase">Pokemon Svelte</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
/>
<div class="grid gap-4 py-4 md:grid-cols-2">
	{#each filteredPokemon as pokemon}
		<Card {pokemon} />
	{/each}
</div>
