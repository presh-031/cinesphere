<script>
	export let data;
	const movieDetail = data.movieDetail;

	console.log(movieDetail);
</script>

<div>
	<div>
		<p>Back</p>
	</div>

	<div>
		<img
			src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
			alt={movieDetail.title}
		/>
		<div>Play</div>
	</div>

	<div>
		{#each movieDetail.genres as genre}
			<div><span>{genre.name}</span></div>
		{/each}
	</div>

	<p>{movieDetail.title}</p>
</div>
