import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const pokaStore: Writable<Pokemon[]> = writable([]);

export interface PokemonDetail {
	types: { type: { name: string } }[];
	weight: number;
	species: { name: string; url: string };
	height: number;
	abilities: { ability: { name: string } }[];
}

export interface Pokemon {
	name: string;
	id: number;
	image: string;
}

interface JsonType {
	name: string;
}

export const fetchPokemon = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon';
	const res = await fetch(url);
	if (res.status !== 200) {
		console.log('error fetch api');
	}
	const data = await res.json();
	const pokemon = data.results.map((data: JsonType, index: number) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	console.log(pokemon);
	pokaStore.set(pokemon);
};
fetchPokemon();
