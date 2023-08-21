<script>
	import Movie from './Movie.svelte';

	export let movies;
</script>

<div>
	{#each movies as movie}
		<Movie {movie} />
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 2;
		gap: 2rem;
	}
</style>
