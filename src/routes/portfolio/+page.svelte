<script lang="ts">
	import { goto } from '$app/navigation';

	function navigateToProject(projectName: string) {
		goto(`/portfolio/${projectName}`);
	}

	export let data;

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

	let projectChunks = chunkProjects(data.projects, 4);
</script>

<div>
	<div class="flex-col sm:flex justify-center item-center my-10">
		<div class="w-full flex justify-center">
			<h2 class="h2">
				<span
					class="bg-gradient-to-br from-yellow-500 to-yellow-700 bg-clip-text text-transparent box-decoration-clone"
				>
					Portfolio
				</span>
			</h2>
		</div>
		<div class="flex items-center justify-center pt-2 lg:pt-0 lg:absolute lg:right-5 mx-10">
			<span class="chip variant-ghost-surface mx-4 text-sm">Filter</span>
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
