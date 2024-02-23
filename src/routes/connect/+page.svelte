<script lang="ts">
	import { onMount } from 'svelte';

	let twitterHeight: number;

	export let data;
	const publications = data.publications.items;
	const filteredPublications = publications
		.filter((pub: { metadata: { content: any } }) => pub.metadata && pub.metadata.content)
		.slice(0, 10);

	function setTwitterDimension() {
		const vh = window.innerHeight;
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
	<div
		class="flex flex-row justify-center group namaaste-cursor unselectable pb-10 lg:pb-4 h-auto relative"
	>
		<h1
			class="text-4xl md:text-6xl flex font-love_notes justify-center absolute top-0 left-0 right-0 mx-auto text-center group-hover:hidden"
		>
			Hello!<span class="hidden min-[350px]:block"> Nice to meet you!</span>
		</h1>
		<h1
			class="h1 flex flex-row font-kalam justify-center font-semibold absolute top-0 left-0 right-0 mx-auto py-2 sm:py-4 md:pb-6 lg:py-4 text-center hidden group-hover:block group-hover:flex"
		>
			नमस्ते!<span class="hidden min-[460px]:block flex-row">आपसे मिलकर अच्छा लगा!</span>
		</h1>
	</div>
	<div
		class="flex-col mb-4 md:mb-0 md:flex-row md:flex w-full justify-center hide-scrollbar min-[350px]:mt-2 md:mt-6 lg:mt-12"
	>
		<div
			class="mx-2 mb-4 md:mb-0 h-[40vh] md:w-[50vw] min-[798px]:max-w-[48vw] card overflow-scroll hide-scrollbar rounded-md !bg-transparent variant-outline"
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

		<div
			class="mx-2 h-[40vh] md:w-[50vw] md:max-w-[48vw] card rounded-md !bg-transparent flex flex-col variant-outline"
		>
			<button
				class="w-full hover:bg-green-700 hover:bg-opacity-10 transition-colors duration-500"
				on:click={handleLensProfileClick}
			>
				<div class="h-14 flex flex-row items-center relative">
					<h3 class="h3 text-white !bg-transparent p-2">World Through My Lens</h3>
					<img src="lens.svg" alt="lens" class="h-12" />
					<p
						class="hidden min-[910px]:block lg:flex absolute right-2 rounded-full border py-1 px-4 bg-pink-400 bg-opacity-25 hover:bg-pink-700 transition-colors duration-300"
					>
						Follow<span class="hidden min-[1050px]:block" style="margin-left: 4px;">on Lens</span>
					</p>
				</div>
				<div class="flex items-center">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class="rounded-sm h-12 w-12 md:h-16 md:w-16 mx-4 my-2"
						src={data.profile.metadata.picture.optimized.uri}
						alt="lens profile picture"
					/>
					<div class="flex-col">
						<div class="flex items-center">
							<h4 class="h5 pr-8">{data.profile.metadata.displayName}</h4>
							<div class="hidden lg:block lg:flex rounded-md">
								<p class="px-4 border rounded-l">
									Followers: {data.profile.stats.followers}
								</p>
								<p class="px-4 border-t border-r border-b rounded-r">
									Following: {data.profile.stats.following}
								</p>
							</div>
						</div>
						<p class="hidden md:block text-start">
							{data.profile.metadata.bio}<br />
						</p>
					</div>
				</div>
			</button>
			<div class="flex-grow overflow-auto hide-scrollbar text-white">
				{#each filteredPublications as post}
					<button
						class="flex hover:bg-orange-700 hover:bg-opacity-10 transition-colors duration-500 w-full"
						on:click={() => {
							handleLensPostClick(post.stats.id);
						}}
					>
						<div class="flex-shrink-0">
							<img
								src="https://raw.seadn.io/files/5ae7fd7f4e447480699318309ec13f53.svg"
								alt="lens post"
								class="h-8 w-8 md:h-10 md:w-10 rounded-full mx-4 my-2"
							/>
						</div>
						<div class="flex flex-grow items-center">
							<div class="flex-grow p-2 text-start">
								<p class="text-slate-200 text-opacity-50 text-xs">@chethack.lens</p>
								<div class="text-base">{post.metadata.content}</div>
							</div>
						</div>
					</button>
				{/each}
				<button class="w-full p-2" on:click={handleLensProfileClick}>
					<p
						class="text-white p-2 border rounded-full hover:bg-pink-400 hover:bg-opacity-10 transition-colors duration-500"
					>
						Visit my profile
					</p>
				</button>
			</div>
		</div>
	</div>
	<div class="flex flex-col mb-4 md:flex-row md:py-4">
		<div
			class="mx-2 mb-4 md:mb-0 h-[40vh] md:w-[50vw] card rounded-md !bg-transparent flex flex-col variant-outline"
		>
			<div class="flex flex-col border rounded-lg border-slate-500 border-opacity-25 m-2">
				<div class="flex items-center bg-white bg-opacity-10 rounded-t-lg">
					<img src="linkedin.png" alt="linkedin" class="h-10 p-2" />
				</div>
				<div class="flex flex-col bg-black rounded-b-lg bg-opacity-15">
					<div class="flex flex-row md:items-center">
						<img
							src="https://media.licdn.com/dms/image/C4D03AQE1SIqATg94Lw/profile-displayphoto-shrink_200_200/0/1658836970805?e=1713398400&v=beta&t=rr9YJTZtdpenK1hmoQsZdIAqS_FnziK39xzRcx19iro"
							alt="linkedin profile"
							class="h-9 w-9 md:h-16 md:w-16 rounded-full mx-4 my-2"
						/>
						<div class="flex flex-col w-[100vw] md:w-[40vw] truncate">
							<div class="flex flex-row justify-between">
								<button
									class="text-base md:text-xl lg:text-2xl px-2 pt-4 hover:underline"
									on:click={() =>
										window.open('https://www.linkedin.com/in/chetanybhardwaj/, _blank')}
									>Chetany Bhardwaj</button
								>
								<button
									class="flex text-sm px-2 pt-5"
									on:click={() =>
										window.open('https://www.linkedin.com/school/upesdehradun/', '_blank')}
								>
									<img src="UPES.png" alt="upes" class="h-5" />
									<p class="px-1 hover:underline">UPES</p>
								</button>
							</div>
							<div class="group unselectable text-md px-2 py-1">
								<p class="group-hover:hidden">
									Software engineer | Blockchain beever | Cloud native | IoT connected
								</p>
								<p class="hidden group-hover:block animate-bounce">LIFE ENTHUSIAST</p>
							</div>
						</div>
					</div>

					<div class="my-1 mx-2">
						<button
							class="flex justify-center border rounded-full w-full inner-glow px-4"
							on:click={() => window.open('https://www.linkedin.com/in/chetanybhardwaj/, _blank')}
						>
							<span class="hidden sm:block md:hidden min-[784px]:block" style="margin-right: 4px;"
								>View profile and</span
							>Connect on Linkedin
						</button>
					</div>
				</div>
			</div>
			<div
				class="h-full m-2 mt-0 bg-black bg-opacity-15 flex flex-col items-center justify-between rounded-lg border border-slate-500 border-opacity-25 relative"
			>
				<div class="w-full flex flow-row items-center bg-orange-700 bg-opacity-5 p-2">
					<h3 class="h3 text-white px-2">Write me an email</h3>
					<img src="email.png" alt="email" class="invert h-6" />
				</div>
				<p class="hidden md:block text-base lg:text-xl">
					Questions, job opportunities, or just to say hi!
				</p>

				<button
					class="border rounded-lg m-2 hover:bg-orange-700 hover:bg-opacity-10 transition-colors duration-500"
					on:click={() => window.open('mailto:chetany@sita.farm')}
				>
					<p class="text-white m-2">chetany@sita.farm</p>
				</button>
			</div>
		</div>
		<div
			class="mx-2 h-[40vh] md:w-[50vw] card rounded-md !bg-transparent flex flex-col variant-outline"
		>
			<h3 class="h3 text-white p-2">Get a memorial of this visit</h3>
			<h6 class="p-2 font-sans">Scan this QR to get your POAP</h6>
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

	.inner-glow:hover {
		box-shadow: inset 0 0 5px #ffffff;
		transition: box-shadow 0.3s ease-in-out;
	}
</style>
