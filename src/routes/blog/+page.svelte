<script lang="ts">
	//export let data;
	import { goto } from '$app/navigation';

	function navigateToBlog(blogName: string) {
		goto(`/blog/${blogName}`);
	}
</script>

<div>
	<div class="flex w-screen justify-center py-2">
		<h2 class="h2 p-4">Blogs</h2>
	</div>
	<div class="flex w-full justify-center px-5 py-2">
		<button
			class="w-auto card !bg-transparent card-hover m-2"
			on:click={() => navigateToBlog('blog1')}
		>
			<img
				src="https://via.placeholder.com/300x100"
				alt="placeholder"
				class="filter invert w-full h-48 object-cover"
			/>
			<p class="p-2 pl-4">Technology</p>
			<p class="p-2 pl-4 text-justify">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas in maxime suscipit
				praesentium asperiores. Maxime natus reiciendis aperiam ea ipsum, ab fuga nam autem
				explicabo itaque aut perferendis cupiditate commodi.
			</p>
			<hr />
			<div class="flex flex-row justify-between py-2 px-4">
				<p>By Chetany Bhardwaj</p>
				<div>
					<div class="badge variant-ghost mx-1">Philosophy</div>
					<div class="badge variant-ghost mx-1">Technology</div>
				</div>
				<time datetime="2024-03-16">16 March, 2024</time>
			</div>
		</button>
	</div>
</div>
