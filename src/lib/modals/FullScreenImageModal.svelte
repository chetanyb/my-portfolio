<script>
	import { onMount, onDestroy } from 'svelte';
	import { modalStore } from '../../stores/modalStore';

	function closeModal() {
		modalStore.update((current) => ({ ...current, visible: false }));
	}

	// Add the event listener for the escape key in onMount to ensure it's client-side
	onMount(() => {
		const handleKeyPress = (event) => {
			if (event.key === 'Escape') {
				closeModal();
			}
		};

		// Since onMount runs in the client, window will be defined here
		window.addEventListener('keydown', handleKeyPress);

		// Return a cleanup function to remove the event listener
		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	});
</script>

{#if $modalStore.visible}
	<div
		class="fixed inset-0 bg-black bg-opacity-90 z-40 flex justify-center items-center p-4"
		on:click={closeModal}
	>
		<div class="relative inline-flex justify-center items-center w-full h-full">
			<img
				src={$modalStore.image}
				class="rounded shadow-xl object-contain max-w-[90%] max-h-[90%]"
				alt="Fullscreen Image"
				on:click|stopPropagation
			/>
			<button
				class="absolute top-0 right-0 mt-4 mr-4 p-2 bg-white text-black font-bold rounded-full shadow-lg w-10 h-10 flex items-center justify-center cursor-pointer"
				on:click={closeModal}
			>
				×
			</button>
		</div>
	</div>
{/if}
