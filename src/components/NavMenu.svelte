<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	export let isOpen;

	const links = [
		{ name: 'Home', icon: 'carbon:home', path: '/' },
		{ name: 'Trending', icon: 'mdi:fire', path: '/trending' },
		{ name: 'Movies', icon: 'fluent-mdl2:my-movies-t-v', path: '/movies' },
		{ name: 'Tvs', icon: 'iconoir:tv', path: '/tvs' },
		{ name: 'Bookmarks', icon: 'material-symbols:bookmarks', path: '/bookmarks' },
		{ name: 'Settings', icon: 'system-uicons:settings', path: '/settings' }
	];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<nav
	on:click={() => (isOpen = !isOpen)}
	class={`nav-container ${isOpen ? 'nav-container-open' : ''}`}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click={(e) => e.stopPropagation()} class="nav">
		<div>
			<p>cinesphere</p>
		</div>
		<div>
			<Icon icon="ic:outline-search" />
			<input type="search" name="search" id="search" placeholder="Search Movies..." class="" />
		</div>

		<ul>
			{#each links as link}
				<li class:active={$page.url.pathname === link.path}>
					<a href={link.path}><Icon icon={link.icon} /><span>{link.name}</span></a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.nav-container {
		width: 100%;
		height: 100vh;
		position: fixed;
		z-index: 1000;
		left: -100%;
		top: 0;
		background-color: rgba(0, 0, 0, 0.6);
		transition: left 0.3s ease-in-out;
	}
	.nav-container-open {
		left: 0;
	}
	.nav {
		width: 50%;
		height: 100%;
		background-color: white;
		transition: font-weight 0.3s ease-in-out;
	}

	.nav div:nth-child(1) {
		height: 10rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nav div:nth-child(1) p {
		font-size: 2.8rem;
		font-weight: bold;
	}

	.nav div:nth-child(2) {
		width: 80%;
		display: flex;
		gap: 1rem;
		border: 1px solid red;
		margin: 0 auto;
	}
	.nav div:nth-child(2) input {
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
