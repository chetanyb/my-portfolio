<script>
	export let data;
	console.log('data ye hai');
	console.log(data);
</script>

<article>
	<h1 class="h1">{data.project?.slug}</h1>
	<h1>{data.project?.title}</h1>
	<p>{data.project?.description}</p>
</article>
