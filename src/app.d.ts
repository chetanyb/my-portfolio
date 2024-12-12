// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
export {};

declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare global {
	interface Window {
		twttr: typeof twttr;
	}
}

// Declare the twttr namespace
declare namespace twttr {
	namespace widgets {
		function load(element?: HTMLElement, callback?: () => void): void;
		// Add other widget methods if needed
	}
}
