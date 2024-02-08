<script lang="ts">
	import { modalStore } from '../../../stores/modalStore.js';
	import FullScreenImageModal from '$lib/modals/FullScreenImageModal.svelte';

	function openModal(image: string) {
		modalStore.set({ visible: true, image });
	}

	export let data;
</script>

<FullScreenImageModal />

<article>
	<div class="flex flex-col sm:flex-row items-center">
		<h1 class="h1">{data.project?.title}</h1>
		<div class="flex flex-row sm:flex-row flex-auto gap-1 pl-8 w-full sm:w-auto">
			{#if data.project?.links}
				{#each Object.keys(data.project?.links) as link}
					{#if data.project?.links[link] != null}
						<a
							class="logo-item variant-ghost w-full sm:w-auto"
							href={data.project?.links[link].url}
							target="_blank"
						>
							<img
								src={data.project?.links[link].logo}
								alt={`${data.project?.links[link].name}-logo`}
								class="h-5 mx-auto sm:mx-0"
							/>
							<span class="hidden lg:block">{data.project?.links[link].name}</span>
						</a>
					{/if}
				{/each}
			{/if}
		</div>
	</div>

	<h4 class="h4 py-6">{data.project?.description}</h4>

	<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 pb-4">
		{#if data.project?.video}
			<div
				class="snap-start shrink-0 card py-2 w-40 h-32 md:w-80 md:h-60 lg:w-96 text-center flex justify-center items-center overflow-hidden"
			>
				<!-- svelte-ignore a11y-media-has-caption -->
				<video controls class="object-contain w-full h-full px-2">
					<source src={data.project.video} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		{/if}
		{#each data.project?.images ?? [] as image}
			<button
				class="snap-start shrink-0 card py-2 w-40 h-32 md:w-80 md:h-60 lg:w-96 text-center cursor-pointer"
				on:click={() => openModal(image)}
				style="background: none; border: none; padding: 0;"
			>
				<img src={image} alt={data.project?.title} class="object-contain w-full h-full px-2 py-2" />
			</button>
		{/each}
	</div>

	<hr class="!border-t-1 mt-6 !border-dashed" />

	<div class="flex flex-col sm:flex-row">
		<div class="pt-8 w-full">
			{#if data.project?.elaboration}
				<p class="text-justify">{data.project?.elaboration}</p>
			{/if}
			<br />
			{#if data.project?.how}
				<p class="text-justify">{data.project?.how}</p>
			{/if}
		</div>
		<span class="hidden sm:block divider-vertical mx-2 border-dashed" />

		<div class="pt-8 w-full sm:w-1/4 order-last sm:order-none">
			{#if data.project?.details}
				{#each Object.entries(data.project?.details) as [key, value]}
					<div class="pl-4">
						<p class="h6">{key}</p>
						<ul class="list-disc pl-6 flex flex-wrap">
							{#each value.split('\n') as line}
								{#if line.length > 20 && key != 'Team'}
									<li class="w-full">{@html line}</li>
								{:else}
									<li class="2xl:w-1/2 mx-4 lg:mx-2 2xl:mx-0 md:pr-4 sm:w-full">{@html line}</li>
								{/if}
							{/each}
						</ul>
					</div>
					{#if key !== Object.keys(data.project?.details)[Object.keys(data.project?.details).length - 1]}
						<hr class="!border-t-1 my-6 !border-dashed" />
					{/if}
				{/each}
			{/if}
		</div>
	</div>
</article>
