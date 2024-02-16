<script lang="ts">
	import { onMount } from 'svelte';

	let twitterHeight: number;
	export let data;

	function setTwitterDimension() {
		const vh = window.innerHeight;
		const vw = window.innerWidth;
		twitterHeight = (window.innerWidth <= 768 ? 0.4 : 0.75) * vh;
	}

	function handleLensProfileClick() {
		window.open('https://hey.xyz/u/chethack', '_blank');
	}

	function handleLensPostClick(id: string) {
		window.open(`https://hey.xyz/posts/${id}`, '_blank');
	}

	onMount(() => {
		setTwitterDimension();
		window.addEventListener('resize', setTwitterDimension);

		return () => {
			window.removeEventListener('resize', setTwitterDimension);
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
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>

		<div class="mt-12 mx-2 h-[40vh] lg:w-[50vw] card rounded-md !bg-transparent flex flex-col">
			<button
				class="w-full hover:bg-green-700 hover:bg-opacity-10 transition-colors duration-500"
				on:click={handleLensProfileClick}
			>
				<div class="h-14 flex flex-row items-center">
					<h3 class="h3 text-white !bg-transparent p-2">World Through My Lens</h3>
					<img src="lens.svg" alt="lens" class="h-12" />
				</div>
				<div class="flex items-center">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class=" rounded-sm h-16 w-16 mx-4 my-2"
						src={data.profile.metadata.picture.optimized.uri}
						alt="lens profile picture"
					/>
					<div class="flex-col">
						<div class="flex items-center">
							<h4 class="h5 pr-8">{data.profile.metadata.displayName}</h4>
							<div class="flex rounded-md">
								<p class="px-4 border rounded-l">
									Followers: {data.profile.stats.followers}
								</p>
								<p class="px-4 border-t border-r border-b rounded-r">
									Following: {data.profile.stats.following}
								</p>
							</div>
						</div>
						<p class="text-start">
							{data.profile.metadata.bio}<br />
						</p>
					</div>
				</div>
			</button>
			<div class="flex-grow overflow-auto hide-scrollbar text-white">
				{#each data.publications.items as post}
					{#if post.metadata && post.metadata.content}
						<button
							class="flex hover:bg-orange-700 hover:bg-opacity-10 transition-colors duration-500 w-full"
							on:click={() => {
								handleLensPostClick(post.stats.id);
							}}
						>
							<!-- Align image to top -->
							<div class="flex-shrink-0">
								<img src="lenny.jfif" alt="lens post" class="h-10 w-10 rounded-full mx-4 my-2" />
							</div>
							<div class="flex flex-grow items-center">
								<div class="flex-grow p-2 text-start">
									<p class="text-slate-200 text-opacity-50 text-xs">@chethack.lens</p>
									<div>{post.metadata.content}</div>
								</div>
							</div>
						</button>
					{/if}
				{/each}
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
