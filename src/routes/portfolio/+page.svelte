<script lang="ts">
	import { goto } from '$app/navigation';

	function navigateToProject(projectName: string) {
		goto(`/portfolio/${projectName}`);
	}
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
	<div class="w-full flex-col md:flex-row md:flex pr-4 md:pr-0">
		<button
			class="w-full m-2 block card-hover card !bg-transparent"
			on:click={() => navigateToProject('sita')}
		>
			<div
				class="h-16 flex items-baseline justify-between rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-t-sm rounded-b-none relative"
			>
				<img src="/projects/sita.png" alt="sita-logo" class="h-28 p-4" />
				<h3 class="h3 text-3xl absolute -bottom-4 right-4">SITA</h3>
			</div>
			<p class="p-8 pb-0 text-justify">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum nobis
				molestiae quis. Dolorem totam perspiciatis maiores. Non maiores excepturi quo inventore,
				recusandae placeat eveniet, molestiae animi veritatis ratione ipsa.
			</p>
			<div class="flex justify-start px-7 pt-4 pb-2">
				<span class="badge variant-ghost mx-1">IoT</span>
				<span class="badge variant-ghost mx-1">Blockchain</span>
			</div>
		</button>
		<button
			class="w-full m-2 block card-hover card !bg-transparent"
			on:click={() => navigateToProject('sita')}
		>
			<div
				class="h-16 flex items-baseline justify-between rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-t-sm rounded-b-none relative"
			>
				<img src="/projects/sita.png" alt="sita-logo" class="h-28 p-4" />
				<h3 class="h3 text-3xl absolute -bottom-4 right-4">SITA</h3>
			</div>
			<p class="p-8 pb-0 text-justify">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum nobis
				molestiae quis. Dolorem totam perspiciatis maiores. Non maiores excepturi quo inventore,
				recusandae placeat eveniet, molestiae animi veritatis ratione ipsa.
			</p>
			<div class="flex justify-start px-7 pt-4 pb-2">
				<span class="badge variant-ghost mx-1">IoT</span>
				<span class="badge variant-ghost mx-1">Blockchain</span>
			</div>
		</button>
	</div>
</div>
