<script>
	export let movie;
</script>

<div class="">
	<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
</div>

<style>
	img {
		width: 100%;
		height: 25rem;
		object-fit: cover;
		border-radius: 0.8rem;
	}
</style>
