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
	<div class="w-screen flex-col sm:flex-row sm:flex px-10">
		<div class="w-full sm:w-1/4 block card-hover card p-4 m-4 !bg-transparent">
			<div
				class="-m-4 h-16 rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-t-sm rounded-b-none"
			>
				<img src="/projects/sita.png" alt="sita-logo" class="h-28 p-4" />
			</div>
			<h3 class="h3 flex justify-end text-3xl">SITA</h3>
			<p class="m-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum nobis
				molestiae quis. Dolorem totam perspiciatis maiores. Non maiores excepturi quo inventore,
				recusandae placeat eveniet, molestiae animi veritatis ratione ipsa.
			</p>
			<div class="flex justify-start mx-7">
				<span class="badge variant-ghost mx-1">IoT</span>
				<span class="badge variant-ghost mx-1">Blockchain</span>
			</div>
		</div>
		<button
			class="w-full sm:w-1/4 block card-hover card p-4 m-4 !bg-transparent"
			on:click={() => navigateToProject('sita')}
		>
			<div
				class="-m-4 h-16 rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-t-sm rounded-b-none"
			>
				<img src="/projects/sita.png" alt="sita-logo" class="h-28 p-4" />
			</div>
			<h3 class="h3 flex justify-end text-3xl">SITA</h3>
			<p class="m-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum nobis
				molestiae quis. Dolorem totam perspiciatis maiores. Non maiores excepturi quo inventore,
				recusandae placeat eveniet, molestiae animi veritatis ratione ipsa.
			</p>
			<div class="flex justify-start mx-7">
				<span class="badge variant-ghost mx-1">IoT</span>
				<span class="badge variant-ghost mx-1">Blockchain</span>
			</div>
		</button>

		<div class="w-full sm:w-1/4 block card-hover card p-4 m-4 !bg-transparent">
			<div
				class="-m-4 h-16 rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-t-sm rounded-b-none"
			>
				<img src="/projects/sita.png" alt="sita-logo" class="h-28 p-4" />
			</div>
			<h3 class="h3 flex justify-end text-3xl">SITA</h3>
			<p class="m-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum nobis
				molestiae quis. Dolorem totam perspiciatis maiores. Non maiores excepturi quo inventore,
				recusandae placeat eveniet, molestiae animi veritatis ratione ipsa.
			</p>
			<div class="flex justify-start mx-7">
				<span class="badge variant-ghost mx-1">IoT</span>
				<span class="badge variant-ghost mx-1">Blockchain</span>
			</div>
		</div>
		<div class="w-full sm:w-1/4 block card-hover card p-4 m-4 !bg-transparent">
			<div
				class="-m-4 h-16 rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-t-sm rounded-b-none"
			>
				<img src="/projects/sita.png" alt="sita-logo" class="h-28 p-4" />
			</div>
			<h3 class="h3 flex justify-end text-3xl">SITA</h3>
			<p class="m-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum nobis
				molestiae quis. Dolorem totam perspiciatis maiores. Non maiores excepturi quo inventore,
				recusandae placeat eveniet, molestiae animi veritatis ratione ipsa.
			</p>
			<div class="flex justify-start mx-7">
				<span class="badge variant-ghost mx-1">IoT</span>
				<span class="badge variant-ghost mx-1">Blockchain</span>
			</div>
		</div>
	</div>
	<div class="w-screen flex px-10">
		<div class="w-1/3 block card-hover card p-4 m-4 !bg-transparent">
			<div
				class="-m-4 h-16 rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-t-sm rounded-b-none"
			>
				<img src="/projects/sita.png" alt="sita-logo" class="h-28 p-4" />
			</div>
			<h3 class="h3 flex justify-end text-3xl">SITA</h3>
			<p class="m-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum nobis
				molestiae quis. Dolorem totam perspiciatis maiores. Non maiores excepturi quo inventore,
				recusandae placeat eveniet, molestiae animi veritatis ratione ipsa.
			</p>
			<div class="flex justify-start mx-7">
				<span class="badge variant-ghost mx-1">IoT</span>
				<span class="badge variant-ghost mx-1">Blockchain</span>
			</div>
		</div>
		<div class="w-1/3 block card-hover card p-4 m-4 !bg-transparent">
			<div
				class="-m-4 h-16 rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-t-sm rounded-b-none"
			>
				<img src="/projects/sita.png" alt="sita-logo" class="h-28 p-4" />
			</div>
			<h3 class="h3 flex justify-end text-3xl">SITA</h3>
			<p class="m-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum nobis
				molestiae quis. Dolorem totam perspiciatis maiores. Non maiores excepturi quo inventore,
				recusandae placeat eveniet, molestiae animi veritatis ratione ipsa.
			</p>
			<div class="flex justify-start mx-7">
				<span class="badge variant-ghost mx-1">IoT</span>
				<span class="badge variant-ghost mx-1">Blockchain</span>
			</div>
		</div>
		<div class="w-1/3 block card-hover card p-4 m-4 !bg-transparent">
			<div
				class="-m-4 h-16 rounded-sm bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-t-sm rounded-b-none"
			>
				<img src="/projects/sita.png" alt="sita-logo" class="h-28 p-4" />
			</div>
			<h3 class="h3 flex justify-end text-3xl">SITA</h3>
			<p class="m-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum nobis
				molestiae quis. Dolorem totam perspiciatis maiores. Non maiores excepturi quo inventore,
				recusandae placeat eveniet, molestiae animi veritatis ratione ipsa.
			</p>
			<div class="flex justify-start mx-7">
				<span class="badge variant-ghost mx-1">IoT</span>
				<span class="badge variant-ghost mx-1">Blockchain</span>
			</div>
		</div>
	</div>
</div>
