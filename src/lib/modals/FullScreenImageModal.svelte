<script>
	import { modalStore } from '../../stores/modalStore';

	const cButton = 'fixed top-4 right-4 z-50 font-bold shadow-xl';
	const cImage = 'max-w-[90%] max-h-[90%] rounded overflow-hidden shadow-xl';

	function closeModal() {
		modalStore.update((current) => ({ ...current, visible: false }));
	}
</script>

{#if $modalStore.visible}
	<button class={cButton} on:click={closeModal}>×</button>
	<div
		class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
		on:click={closeModal}
	>
		<img src={$modalStore.image} class={cImage} alt="Fullscreen Image" />
	</div>
{/if}
