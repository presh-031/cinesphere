<script>
	import Icon from '@iconify/svelte';
	import NavMenu from './NavMenu.svelte';

	let isOpen = false;
</script>

<header class="header">
	<p>
		<!-- {currentPage} -->
		Movies
	</p>
	<div>
		<Icon icon="teenyicons:filter-outline" class="icon" />
		<button on:click={() => (isOpen = !isOpen)}>Menu</button>
	</div>
</header>
<NavMenu {isOpen} />

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		height: 10rem;
		position: relative;
		border: 1px solid red;
	}
	.header p {
		font-size: 1.8rem;
		text-transform: capitalize;
	}
	.header div {
		display: flex;
		align-items: center;
	}
</style>
