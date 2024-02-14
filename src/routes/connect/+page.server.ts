export async function load({ fetch }) {
	try {
		const query = `query GetProfile {
    profile(request: { forHandle: "lens/@chethack" }) {
      id
      ownedBy {
        address
      }
      stats {
        followers
        following
      }
      metadata {
        bio
        picture {
          ... on ImageSet {
            optimized {
              uri
            }
          }
        }
        displayName
      }    
    }
    publications(request: { where: {from: "0x01f047"} }) {
      items {
        ... on Post {
          by {
            id
          }
          metadata {
            ... on TextOnlyMetadataV3 {
              content
            }
          }
        }
      }
    }
  }`;

		const variables = {};

		const response = await fetch('https://api-v2.lens.dev/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query, variables })
		});

		const data = await response.json();
		const profile = data.data.profile;
		const publications = data.data.publications;
		console.log(
			`profile: ${JSON.stringify(profile)}\npublications: ${JSON.stringify(publications)}`
		);

		return {
			profile: await profile,
			publications: await publications
		};
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		return {
			status: 500,
			error: error.message
		};
	}
}
