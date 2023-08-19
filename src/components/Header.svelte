<!-- <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script> -->

<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js">
	import { Hamburger } from 'svelte-hamburgers';
	import Icon from '@iconify/svelte';

	let open = true;
</script>

<nav class="flex relative justify-between items-center h-20 px-6">
	<p class="font-bold text-2xl">Discover Movies</p>
	<div class="flex items-center space-x-4 text-2xl">
		<iconify-icon icon="material-symbols:menu" />

		<!-- <button><Icon icon="teenyicons:filter-outline" class=" text-green-600" /></button> -->
		<Hamburger bind:open />
	</div>
	{#if open}
		<div class="absolute bg-white top-0 left-0 w-[50%] h-screen border border-red-800">
			<div class="h-20 flex border border-red-800 items-center justify-center">
				<p class="text-2xl font-bold">cinesphere</p>
			</div>
			<div>
				<!-- search icon -->
				<input type="search" name="search" id="search" class="" />
			</div>
			<ul>
				<li>Home</li>
				<li>Trending</li>
				<li>Movies</li>
				<li>TV's</li>
				<li>Bookmarks</li>
				<li>Settings</li>
			</ul>
		</div>
	{/if}
</nav>
