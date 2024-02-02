<script>
	export let data;
	console.log('data ye hai');
	console.log(data);
</script>

<article>
	<h1 class="h1">{data.project?.slug}</h1>

	<div
		class="w-full snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10"
	>
		{#each Array.from({ length: 8 }) as _, i}
			<div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">{i + 1}</div>
		{/each}
	</div>

	<h1>{data.project?.title}</h1>
	<p>{data.project?.description}</p>
</article>
