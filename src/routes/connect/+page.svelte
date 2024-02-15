<script lang="ts">
	import { onMount } from 'svelte';

	let twitterHeight: number;
	export let data;

	function setTwitterHeight() {
		const vh = window.innerHeight;
		twitterHeight = (window.innerWidth <= 768 ? 0.4 : 0.75) * vh;
	}

	onMount(() => {
		setTwitterHeight();
		window.addEventListener('resize', setTwitterHeight);

		return () => {
			window.removeEventListener('resize', setTwitterHeight);
		};
	});
</script>

<div>
	<!---->
	<div
		class="flex flex-row justify-center group namaaste-cursor unselectable pb-2 md:pb-6 lg:pb-10 h-auto relative"
	>
		<h1
			class="text-4xl md:text-6xl flex font-love_notes justify-center py-3 absolute top-0 left-0 right-0 mx-auto text-center lg:py-6 group-hover:hidden"
		>
			Hello!<span class="hidden min-[350px]:block"> Nice to meet you!</span>
		</h1>
		<h1
			class="h1 flex flex-row font-kalam justify-center font-semibold absolute top-0 left-0 right-0 mx-auto py-4 md:py-6 lg:py-8 text-center hidden group-hover:block group-hover:flex"
		>
			नमस्ते!<span class="hidden min-[460px]:block flex-row">आपसे मिलकर अच्छा लगा!</span>
		</h1>
	</div>
	<div
		class="flex-col md:flex-row md:flex w-full justify-center hide-scrollbar min-[350px]:my-2 md:my-6 lg:my-12"
	>
		<div
			class="mt-12 mx-2 h-[40vh] lg:w-[50vw] card overflow-scroll hide-scrollbar rounded-md !bg-transparent"
		>
			<!-- svelte-ignore a11y-missing-content -->
			<a
				class="twitter-timeline"
				data-theme="dark"
				data-dnt="true"
				data-height={twitterHeight}
				data-chrome="transparent noscrollbar noborders"
				href="https://twitter.com/BRUHDWAJ?ref_src=twsrc%5Etfw"
			></a>
			<!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->
		</div>
		<div
			class="flex-col mt-12 mx-2 h-[40vh] lg:w-[50vw] card overflow-scroll hide-scrollbar rounded-md !bg-transparent"
		>
			<!-- svelte-ignore a11y-missing-content -->
			<div class="flex flex-row rounded-md">
				<h4 class="h4 text-white !bg-transparent p-2 border-b-0">World Through My Lens</h4>
			</div>
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
