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
		grid-template-columns: 1fr 1fr;
		gap: 1.4rem;
		padding: 0 1.4rem;
	}
</style>
