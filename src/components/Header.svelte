<script>
	import { Hamburger } from 'svelte-hamburgers';
	import Icon from '@iconify/svelte';

	let open;
	export let currentPage;
	console.log(currentPage);
	// if (currentPage === ) {

	// }
</script>

<nav class="header">
	<p>
		<!-- {currentPage} -->
		Movies
	</p>
	<div>
		<Icon icon="teenyicons:filter-outline" class="icon" />
		<Hamburger bind:open />
	</div>
</nav>

{#if open}
	<div class="nav-menu">
		<div>
			<p>cinesphere</p>
		</div>
		<div>
			<Icon icon="ic:outline-search" />
			<input type="search" name="search" id="search" placeholder="Search Movies..." class="" />
		</div>
		<ul>
			<li>
				<a href="/">
					<Icon icon="carbon:home" />
					<span>Home</span></a
				>
			</li>
			<li>
				<a href="/trending"><Icon icon="mdi:fire" /><span>Trending</span></a>
			</li>
			<li><a href="/movies"><Icon icon="fluent-mdl2:my-movies-t-v" /><span>Movies</span></a></li>
			<li><a href="/tvs"><Icon icon="iconoir:tv" /><span>TV's</span></a></li>
			<li>
				<a href="/bookmarks"><Icon icon="material-symbols:bookmarks" /><span>Bookmarks</span></a>
			</li>
			<li><a href="/settings"><Icon icon="system-uicons:settings" /><span>Settings</span></a></li>
		</ul>
	</div>
{/if}

<style>
	.icon {
		font-size: 2rem;
		border: 1px solid red;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		height: 10rem;
		position: relative;
	}
	.header p {
		font-size: 1.8rem;
		text-transform: capitalize;
	}
	.header div {
		display: flex;
		align-items: center;
	}

	.nav-menu {
		outline: 1px solid red;
		width: 50%;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		background-color: white;
	}
	.nav-menu div:nth-child(1) {
		height: 10rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nav-menu div:nth-child(1) p {
		font-size: 2.8rem;
		font-weight: bold;
	}

	.nav-menu div:nth-child(2) {
		width: 80%;
		display: flex;
		gap: 1rem;
		border: 1px solid red;
		margin: 0 auto;
	}
	.nav-menu div:nth-child(2) input {
		max-width: 100%;
		outline: none;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-size: 1.6rem;
		margin-top: 2rem;
	}
	ul > li > a {
		display: flex;
		gap: 1rem;
		align-items: center;
		padding: 0.5rem 2rem;
		color: black;
		text-decoration: none;
	}
</style>
