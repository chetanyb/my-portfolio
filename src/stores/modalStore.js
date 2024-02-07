import { writable } from 'svelte/store';

export const modalStore = writable({
	visible: false,
	image: null
});
