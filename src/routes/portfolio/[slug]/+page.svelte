<script>
	export let data;
	console.log('data ye hai');
	console.log(data);
</script>

<article>
	<div class="flex items-center">
		<h1 class="h1">{data.project?.slug}</h1>

		<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1 px-12 flex flex-auto">
			<a class="logo-item variant-ghost" href={data.project?.links?.github}>
				<img src="/github.svg" alt="github-logo" class="h-5" />
				<span>GitHub</span>
			</a>
			<a class="logo-item variant-ghost flex justify-center" href="/">
				<img src="/ethglobal.svg" class="h-5" />
				<span>ETHGlobal</span>
			</a>
			<a class="logo-item variant-ghost flex items-center justify-center" href="/">
				<img src="/ethglobal.svg" class="h-5" />
			</a>
			<a class="logo-item variant-ghost flex items-center justify-center" href="/">
				<img src="/ethglobal.svg" class="h-5" />
			</a>
			<a class="logo-item variant-ghost flex justify-center" href="/">
				<img src="/ethglobal.svg" class="h-5" />
				<span>ETHGlobal</span>
			</a>
			<a class="logo-item variant-ghost flex justify-center" href="/">
				<img src="/ethglobal.svg" class="h-5" />
				<span>ETHGlobal</span>
			</a>
			<a class="logo-item variant-ghost flex justify-center" href="/">
				<img src="/ethglobal.svg" class="h-5" />
				<span>ETHGlobal</span>
			</a>
			<a class="logo-item variant-ghost flex justify-center" href="/">
				<img src="/ethglobal.svg" class="h-5" />
				<span>ETHGlobal</span>
			</a>
		</div>
	</div>

	<div
		class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10"
	>
		{#each Array.from({ length: 8 }) as _, i}
			<div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">{i + 1}</div>
		{/each}
	</div>

	<p class="py-8">{data.project?.description}</p>
</article>
