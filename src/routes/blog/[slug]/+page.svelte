<script>
	export let data;
	console.log(data);
</script>

<div>
	<div class="w-full flex justify-between">
		<div class="w-6 h-screen bg-gradient-to-br from-yellow-500 to-yellow-700" />
		<div class="w-full flex-col items-center text-center my-2">
			<h2 class="h2 pt-4">{data.blog?.title}</h2>
			<div class="flex justify-between my-2 mx-4">
				<p>Chetany Bhardwaj</p>
				<p>28 March, 2024</p>
			</div>
			<hr />
		</div>
		<div class="w-6 h-screen bg-gradient-to-br from-yellow-500 to-yellow-700" />
	</div>
</div>
