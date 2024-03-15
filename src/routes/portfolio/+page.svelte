<script lang="ts">
	import { goto } from '$app/navigation';

	function navigateToProject(projectName: string) {
		goto(`/portfolio/${projectName}`);
	}

	export let data;

	let showFilters = false;

	function toggleFilters() {
		showFilters = !showFilters;
	}

	let tags: Record<string, boolean> = {
		Cloud: true,
		IoT: true,
		Blockchain: true
	};

	let filteredProjects: object[] = [];

	$: {
		filteredProjects = data.projects.filter((project) => {
			return Object.keys(tags).some((tag) => tags[tag] && project.tags.includes(tag.toLowerCase()));
		});
	}

	let projectChunks: object[] = [];

	$: {
		projectChunks = chunkProjects(filteredProjects, 4);
	}

	function toggle(tag: string): void {
		tags[tag] = !tags[tag];
	}

	function chunkProjects(array: any[], size: number) {
		return array.reduce((acc, e, i) => {
			let chunk = acc[acc.length - 1];
			if (!chunk || chunk.length === size) {
				acc.push([e]);
			} else {
				chunk.push(e);
			}

			return acc;
		}, []);
	}
</script>

<div>
	<div class="flex-col sm:flex justify-center item-center my-10">
		<div class="w-full flex justify-center">
			<h2 class="h2 gradient-animation">Portfolio</h2>
		</div>
		<div class="flex items-center justify-center pt-2 lg:pt-0 lg:absolute lg:right-5 mx-10">
			{#each Object.keys(tags) as tag}
				<button
					class="chip mx-2 text-sm transition-colors duration-500 ease-in-out {tags[tag]
						? 'bg-gradient-to-br from-yellow-500 via-yellow-300 from-15% to-yellow-700 text-slate-600'
						: 'variant-ghost-surface opacity-75'}"
					on:click={() => {
						toggle(tag);
					}}
				>
					<span class="capitalize">{tag}</span>
				</button>
			{/each}
		</div>
	</div>
	<!--Creating cards for each projects-->
	{#each projectChunks as chunk}
		<div class="w-full flex flex-col md:flex-row pr-4 md:pr-0">
			{#each chunk as project}
				<button
					class="w-full m-2 block card-hover card !bg-transparent relative overflow-hidden"
					on:click={() => navigateToProject(project.slug)}
				>
					<div
						class="absolute top-0 left-0 right-0 h-16 flex items-baseline justify-between rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-700"
					>
						<img src={project.logo} alt={project.slug + ' logo'} class="h-28 p-4" />
						<h2 class="h1 md:h2 -bottom-4 right-4 absolute">
							{project.slug.toUpperCase()}
						</h2>
					</div>
					<p class="p-8 pb-0 text-justify mt-16">
						{project.description}
					</p>
					<div class="flex justify-start px-7 pt-4 pb-2">
						{#if project.tags}
							{#each project.tags as tag}
								<span class="badge variant-ghost mx-1">{tag}</span>
							{/each}
						{/if}
					</div>
				</button>
			{/each}
		</div>
	{/each}
</div>

<style>
	.h2 {
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(90deg, #fbbf24, #f59e0b);
		background-size: 400%;
		animation: gradient-animation 2s infinite alternate linear;
	}

	@keyframes gradient-animation {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: 100%;
		}
	}
</style>
