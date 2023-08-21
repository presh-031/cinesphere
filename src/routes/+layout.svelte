<script>
	import '../app.css';
	import Header from '../components/Header.svelte';

	import { page } from '$app/stores';

	const url = $page.url;

	const currentPage = url.pathname.slice(1);
</script>

<Header {currentPage} />
<slot />
