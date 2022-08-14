<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ params, fetch }) => {
		const id = params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		if (!res.ok) {
			return { status: res.status, error: new Error('could not fetch api') };
		}
		console.log(id);
		return {
			props: { pokemon: await res.json(), id: id }
		};
	};
</script>

<script lang="ts">
	import type { PokemonDetail } from 'src/stores/pokemon';
	export let id: number;
	export let pokemon: PokemonDetail;
	console.log(pokemon);
</script>

<h1>Pokemon: {id}</h1>
<img src={pokemon.species.url} alt={pokemon.species.name} />
<div>{pokemon.species.name}</div>
<div>{pokemon.weight}</div>
<div>{pokemon.height}</div>
{#each pokemon.abilities as ab}
	<div>{ab.ability.name}</div>
{/each}
{#each pokemon.types as ty}
	<div>{ty.type.name}</div>
{/each}
