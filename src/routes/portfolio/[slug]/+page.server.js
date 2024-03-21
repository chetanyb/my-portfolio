//TODO: switch to CMS for this page
import projects from '$lib/projects';

export async function load({ params }) {
	const projectName = params.slug;
	const project = projects.find((project) => project.slug === projectName);

	if (project) {
		return {
			project
		};
	} else {
		return {
			status: 404,
			error: `Project "${projectName}" not found`
		};
	}
}
