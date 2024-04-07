<script>
	//ADD CMS here
	export let data;
</script>

<div>
	<div class="w-full flex justify-between">
		<div class="w-6 hidden md:block bg-gradient-to-br from-yellow-500 to-yellow-700" />
		<div class="w-full text-center my-4">
			<h2 class="h2 pt-4">{data.blog?.title}</h2>
			<div class="flex justify-between mb-2 mx-4">
				<p>Chetany Bhardwaj</p>
				<p>28 March, 2024</p>
			</div>
			<hr class="!border-dashed" />
			<div class="w-full flex flex-col items-center justify-center">
				<img class="p-4" src="https://via.placeholder.com/800x400" alt="blog" />
				<p class="px-2 text-justify">{@html data.blog?.description}</p>
			</div>
		</div>
		<div class="w-6 hidden md:block bg-gradient-to-br from-yellow-500 to-yellow-700" />
	</div>
</div>
