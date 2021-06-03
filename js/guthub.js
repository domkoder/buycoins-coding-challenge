class Github {
	constructor() {
		this.accessToken = "Bearer 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";
	}
	async getUser(username) {
		const { user } = await this.queryFetch(
			`query getUser($username: String!) {
      user(login: $username) {
        bio
        avatarUrl
        id
        name
				login
				repositories(first: 10) {
          totalCount
          edges {
            node {
              name
              url
              updatedAt
              stargazerCount
              id
              description
              languages(first: 1) {
                edges {
                  node {
                    color
                    name
                  }
                }
              }
            }
          }
        }
      }
    }`,
			{
				username,
			}
		);
		return user;
	}

	async queryFetch(query, variables) {
		const fetchResponse = await fetch("https://api.github.com/graphql", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: this.accessToken,
			},
			body: JSON.stringify({
				query: query,
				variables: variables,
			}),
		});

		const { data } = await fetchResponse.json();
		return data;
	}
}
