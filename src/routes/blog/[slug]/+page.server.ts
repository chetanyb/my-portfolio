//TODO: switch to CMS for this page
import { STRAPI_URL, STRAPI_TOKEN } from '$env/static/private';

export async function load({ params }) {
	const blogName = params.slug;
	const blog = blogs.find((blog) => blog.slug === blogName);

	if (blog) {
		return {
			blog
		};
	} else {
		return {
			status: 404,
			error: `Blog "${blogName}" not found`
		};
	}
}
