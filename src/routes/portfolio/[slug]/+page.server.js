import projects from '$lib/projects';

export async function load({ params }) {
	console.log('Params:', params);
	const projectName = params.slug;
	console.log('Project Name:', projectName);
	const project = projects.find((project) => project.slug === projectName);
	console.log('Project:', project);

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
