<script>
	import Movies from '../../components/Movies.svelte';

	export let data;
	const trending = data.trending;
</script>

<section>
	<Movies movies={trending} />
</section>
