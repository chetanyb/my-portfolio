//TODO: switch to CMS for this page
import blogs from '$lib/blogs.js';

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
