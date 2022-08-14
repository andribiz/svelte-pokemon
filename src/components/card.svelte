<script lang="ts">
	import type { Pokemon } from '../stores/pokemon';
	export let pokemon: Pokemon;
</script>

<a
	class="p-6 flex flex-col items-center rounded-md shadow-sm hover:shadow-sm bg-gray-100 text-gray-800 text-center"
	href={`/pokemon/${pokemon.id}`}
>
	<img class="h-40 w-40" src={pokemon.image} alt={pokemon.name} />
	<h2 class="uppercase text-2xl">{pokemon.id}. {pokemon.name}</h2>
</a>
