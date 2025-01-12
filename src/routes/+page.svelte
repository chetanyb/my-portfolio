<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	type ImageState = {
		currentImage: string;
		isTransitioning: boolean;
	};

	let state: ImageState = {
		currentImage: '/images/profile-pic.jpg',
		isTransitioning: false
	};

	let interval: ReturnType<typeof setInterval>;

	onMount(() => {
		interval = setInterval(() => {
			state.isTransitioning = true;
			setTimeout(() => {
				state.currentImage = state.currentImage === '/images/profile-pic.jpg' ? '/images/chethack.jpg' : '/images/profile-pic.jpg';
				state.isTransitioning = false;
			}, 500);
		}, 5000);
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<div class="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
	<div class="w-full flex-col-reverse flex lg:flex-row px-8">
		<div class="w-full p-2 lg:w-2/3 flex flex-col justify-center">
			<h1 class="h1">Hey, I'm Chetany Bhardwaj</h1>
			<h3 class="mt-8 h3">aka chethack</h3>
			<p class="text-left mt-8 text-2xl">
				A passionate software engineer with expertise in blockchain, cloud computing,
				and high-performance systems. Driven to create innovative solutions that
				inspire and make a difference.
			</p>
		</div>
		<div class="w-full lg:w-1/3 flex items-center justify-center">
			<img
				src={state.currentImage}
				alt="Profile"
				class="rounded-full w-2/3 sm:w-1/2 lg:w-4/5 object-cover shadow-xl transition-opacity duration-1000"
				class:opacity-0={state.isTransitioning}
				class:opacity-100={!state.isTransitioning}
			/>
		</div>
	</div>
</div>

<style>
    .transition-opacity {
        transition: opacity 1s ease-in-out;
    }
</style>