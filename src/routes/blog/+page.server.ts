import type { PageServerLoad } from './$types';
//import blogs from '$lib/blogs';
import { STRAPI_URL, STRAPI_TOKEN } from '$env/static/private';

//making a request to the strapi api
const blogs = await fetch(`${STRAPI_URL}/blogs`, {
	headers: {
		Authorization: `Bearer ${STRAPI_TOKEN}`
	}
}).then((res) => res.json());

export const load = (async () => {
	return { blogs };
}) satisfies PageServerLoad;
