<script>
	import Icon from '@iconify/svelte';
	import Casts from '../../../components/Casts.svelte';

	export let data;
	const movieDetail = data.movieDetail;

	console.log(movieDetail.backdrop_path);
</script>

<div class="movie-details-page">
	<button
		class="back-btn"
		on:click={() => {
			history.back();
		}}
	>
		<span>&lt;</span>
		<span>Back</span>
	</button>

	<div class="backdrop-container">
		<img
			src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
			alt={movieDetail.title}
			width={355}
			height={200}
		/>
		<div><Icon icon="ion:play-sharp" /></div>
	</div>

	<div class="genres-container">
		{#each movieDetail.genres as genre}
			<div class="genre"><span>{genre.name}</span></div>
		{/each}
	</div>

	<h1 class="title">{movieDetail.title}</h1>

	<div class="movie-numbers">
		<div class="movie-votes">
			<span>{movieDetail.vote_average}</span>
			<span>{movieDetail.vote_count}</span>
		</div>
		<div class="movie-stats">
			<p><span>Release Date:</span> {movieDetail.release_date}</p>
			<p><span>Duration:</span> {movieDetail.runtime}</p>
			<p><span>Status:</span> {movieDetail.status}</p>
		</div>
	</div>

	<button>Bookmark</button>

	<p class="overview">{movieDetail.overview}</p>

	<Casts />
</div>

<style>
	.movie-details-page {
		padding: 0 1rem;
	}
	.back-btn {
		all: unset;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 1.4rem;
		padding: 0.6rem 1.2rem;
		border: 1px solid rgb(57, 124, 36);
		color: rgb(57, 124, 36);
		border-radius: 0.8rem;
		margin-bottom: 1rem;
	}
	.backdrop-container {
		position: relative;
		margin-bottom: 1rem;
	}
	.backdrop-container div {
		position: absolute;
		bottom: 2rem;
		left: 2rem;
		border: 2px solid rgb(57, 124, 36);
		border-radius: 0.8rem;
		display: grid;
		place-items: center;
		height: 3rem;
		width: 4rem;
	}

	img {
		width: 100%;
		height: 20rem;
	}

	.genres-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}
	.genre {
		background-color: rgb(57, 124, 36);
		border: none;
		color: white;
		padding: 0.6rem 1.2rem;
		border-radius: 0.4rem;
		font-size: 1.2rem;
	}
	.title {
		margin-top: 2rem;
		color: rgb(93, 202, 59);
		font-size: 2.8rem;
		font-weight: 700;
	}

	.movie-numbers {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}
	.movie-votes {
		border: 1px solid rgb(57, 124, 36);
		height: 10rem;
		width: 10rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		border-radius: 0.4rem;
		justify-content: center;
		font-size: 1.2rem;
	}
	.movie-votes > span:nth-child(1) {
		font-size: 2rem;
		color: rgb(57, 124, 36);
	}

	.movie-stats {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.6rem;
		font-size: 1.2rem;
	}
	.movie-stats > p > span {
		color: rgb(57, 124, 36);
	}

	button {
		margin: 1rem 0;
		background: transparent;
		color: rgb(57, 124, 36);
		border: 1px solid;
		padding: 0.5rem;
		border-radius: 0.4rem;
	}

	.overview {
		margin-bottom: 3rem;
		font-size: 1.2rem;
	}
</style>
