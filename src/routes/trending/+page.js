export async function load({ fetch }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=07b05651d442420d47455773a0c1dad3&language=en-US&page=1`
	);

	const data = await res.json();
	if (res.ok) {
		return {
			trending: data.results
		};
	}
}
