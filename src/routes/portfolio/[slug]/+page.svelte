<script>
	export let data;
	console.log('data ye hai');
	console.log(data);
</script>

<article>
	<div class="flex items-center">
		<h1 class="h1">{data.project?.title}</h1>
		<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1 pl-8 flex flex-auto">
			<a class="logo-item variant-ghost" href={data.project?.links?.github}>
				<img src="/github.svg" alt="github-logo" class="h-5" />
				<span>GitHub</span>
			</a>
			<a class="logo-item variant-ghost flex justify-center" href="/">
				<img src="/ethglobal.svg" alt="ethglobal-logo" class="h-5" />
				<span>ETHGlobal</span>
			</a>
			<a class="logo-item variant-ghost flex items-center justify-center" href="/">
				<img src="/ethglobal.svg" alt="ethglobal-logo" class="h-5" />
			</a>
			<a class="logo-item variant-ghost flex items-center justify-center" href="/">
				<img src="/ethglobal.svg" alt="ethglobal-logo" class="h-5" />
			</a>
			<a class="logo-item variant-ghost flex justify-center" href="/">
				<img src="/ethglobal.svg" alt="ethglobal-logo" class="h-5" />
				<span>ETHGlobal</span>
			</a>
			<a class="logo-item variant-ghost flex justify-center" href="/">
				<img src="/ethglobal.svg" alt="ethglobal-logo" class="h-5" />
				<span>ETHGlobal</span>
			</a>
			<a class="logo-item variant-ghost flex justify-center" href="/">
				<img src="/ethglobal.svg" alt="ethglobal-logo" class="h-5" />
				<span>ETHGlobal</span>
			</a>
			<a class="logo-item variant-ghost flex justify-center" href="/">
				<img src="/ethglobal.svg" alt="ethglobal-logo" class="h-5" />
				<span>ETHGlobal</span>
			</a>
		</div>
	</div>
	<h4 class="h4 py-6">{data.project?.description}</h4>

	<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 pb-4">
		{#each Array.from({ length: 8 }) as _, i}
			<div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">{i + 1}</div>
		{/each}
	</div>

	<div class="flex-row">
		<div class="pt-8">
			<p>{data.project?.elaboration}</p>
		</div>
		<hr class="!border-t-2 my-6 !border-dashed" />
		<div class="flex items-center">
			{#if data.project?.details}
				{#each Object.entries(data.project?.details) as [key, value]}
					<div class="px-2">
						<p class="h6">{key}</p>
						<p>{value}</p>
					</div>
					{#if key !== Object.keys(data.project?.details)[Object.keys(data.project?.details).length - 1]}
						<span class="divider-vertical h-20 !border-dashed" />
					{/if}
				{/each}
			{/if}
		</div>
	</div>
</article>
