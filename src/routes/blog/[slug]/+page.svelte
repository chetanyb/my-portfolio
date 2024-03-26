<script>
	export let data;
	console.log(data);
</script>

<div>
	<div class="w-full flex justify-between">
		<div class="w-1/12 h-screen bg-gradient-to-br from-yellow-500 to-yellow-700" />
		<div class="my-2">
			<h2 class="h2">{data.blog?.title}</h2>
		</div>
		<div class="w-1/12 h-screen bg-gradient-to-br from-yellow-500 to-yellow-700" />
	</div>
</div>
