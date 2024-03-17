import type { PageServerLoad } from './$types';
import blogs from '$lib/blogs';

export const load = (async () => {
	return { blogs };
}) satisfies PageServerLoad;
