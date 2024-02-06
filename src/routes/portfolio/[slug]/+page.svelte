<script>
	export let data;
</script>

<article>
	<div class="flex items-center">
		<h1 class="h1">{data.project?.title}</h1>
		<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1 pl-8 flex flex-auto">
			{#if data.project?.links}
				{#each Object.keys(data.project?.links) as link}
					{#if data.project?.links[link] != null}
						<a class="logo-item variant-ghost" href={data.project?.links[link].url} target="_blank">
							<img
								src={data.project?.links[link].logo}
								alt={`${data.project?.links[link].name}-logo`}
								class="h-5"
							/>
							<span>{data.project?.links[link].name}</span>
						</a>
					{/if}
				{/each}
			{/if}
		</div>
	</div>
	<h4 class="h4 py-6">{data.project?.description}</h4>

	<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 pb-4">
		{#each Array.from({ length: 8 }) as _, i}
			<div class="snap-start shrink-0 card py-20 w-40 md:w-80 text-center">{i + 1}</div>
		{/each}
	</div>

	<div class="flex">
		<div class="pt-8 w-full">
			<p>{data.project?.elaboration}</p>
			<br />
			<p>{data.project?.how}</p>
		</div>
		<span class="divider-vertical mx-2 border-dashed" />

		<div class="pt-8 w-1/4">
			{#if data.project?.details}
				{#each Object.entries(data.project?.details) as [key, value]}
					<div class="pl-4">
						<p class="h6">{key}</p>
						<ul class="list-disc pl-6 flex flex-wrap">
							{#each value.split('\n') as line}
								{#if line.length > 20 && key != 'Team'}
									<li class="w-full">{@html line}</li>
								{:else}
									<li class="w-1/2">{@html line}</li>
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
