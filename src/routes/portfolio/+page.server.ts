import type { PageServerLoad } from './$types';
import projects from '$lib/projects';

export const load = (async () => {
	return { projects };
}) satisfies PageServerLoad;
