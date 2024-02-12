<script>
	import { onMount } from 'svelte';

	let vh;
	export let profileData;
	export let publicationsData;

	onMount(async () => {
		vh = window.innerHeight;
	});
</script>

<div>
	<div class="flex flex-row justify-center group namaaste-cursor unselectable h-auto relative">
		<h1
			class="h1 flex justify-center py-3 absolute top-0 left-0 right-0 mx-auto text-center lg:py-6 group-hover:hidden"
		>
			Hello!<span class="hidden min-[350px]:block"> Nice to meet you!</span>
		</h1>
		<h2
			class="h1 flex flex-row font-kalam justify-center font-semibold absolute top-0 left-0 right-0 mx-auto py-4 md:py-6 lg:py-8 text-center hidden group-hover:block group-hover:flex"
		>
			नमस्ते!<span class="hidden min-[460px]:block flex-row">आपसे मिलकर अच्छा लगा!</span>
		</h2>
	</div>
	<div class="flex w-full justify-center hide-scrollbar min-[350px]:my-2 md:my-6 lg:my-12">
		<div class="mt-12 h-[75vh] lg:w-[50vh] overflow-scroll hide-scrollbar rounded-md">
			<!-- svelte-ignore a11y-missing-content -->
			<a
				class="twitter-timeline"
				data-theme="dark"
				data-dnt="true"
				data-tweet-limit="3"
				data-height={0.75 * vh}
				data-chrome="transparent noscrollbar"
				href="https://twitter.com/BRUHDWAJ?ref_src=twsrc%5Etfw"
			></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>
	</div>
</div>

<style>
	.namaaste-cursor:hover {
		cursor: url('cursor-namaste.png'), auto;
	}
	.unselectable {
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE/Edge */
		user-select: none; /* Chrome/Opera/Firefox */
	}
</style>
