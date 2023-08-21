<script>
	export let movie;
</script>

<a href={`/movies/${movie.id}`}>
	<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
</a>

<style>
	a {
		text-decoration: none;
	}
	img {
		width: 100%;
		height: 25rem;
		object-fit: cover;
		border-radius: 0.8rem;
	}
</style>
