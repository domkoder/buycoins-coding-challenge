class UI {
	constructor() {
		this.userProfile = document.getElementById("profile");
		this.userRepos = document.getElementById("repos");
	}

	showProfile(user) {
		const { name, login, bio, avatarUrl, repositories } = user;
		this.userProfile.innerHTML = `
		<div class="profile" >
			<div class="display--flex profile__card">
				<div class="profile__image">
					<img style="height:auto;" alt="Avatar" width="100%" class="profile__avatar" src="${avatarUrl}">
				</div>
		
				<div>
					<h2 class="profile__name">${name ? name : " "}</h2>
					<p class="profile__nickname">${login ? login : " "}</p>
				</div>
			</div>
			<p class="profile__bio">
				${bio ? bio : " "}
			</p>
		</div>
		`;
	}

	showRepositories(repositories) {
		const repos = repositories.edges;
		let output = "";
		repos.forEach(({ node: repo }) => {
			const { description, name, stargazerCount, updatedAt, url } = repo;
			const language = repo.languages.edges[0]
				? repo.languages.edges[0].node
				: "";
			output += `
				<div class="repo">
					<div class="display--flex repo__header">
						<h3 class="repo__name">
							<!-- e-marketplace -->
							<a  href="${url}" class="repo__link">${name ? name : ""}</a>
						</h3>
						<button class="star-btn display--flex center">
							<svg class="repo__icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
							Star
						</button>
					</div>
					<div class="repo__body">
						<p class="repo__description" itemprop="description">
						${description ? description : ""}
						</p>
					</div>
					<div class="display--flex repo__footer">
						<div class="repo__label">
							<span class="repo__language-color" style="background-color: ${
								language.color
							}"></span>
							<span>${language ? language.name : ""}</span>
						</div>
						<a class="display--flex center repo__label" href="">
							<svg aria-label="star" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="repo__icon">
								<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
							</svg>
							${stargazerCount ? stargazerCount : ""}
						</a>
	
						<a class="display--flex center repo__label" href="/ireade/nd1309-supply-chain/network/members">
							<svg aria-label="fork" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="repo__icon">
								<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
							</svg>
							
						</a>
						<span class="repo__label">
						Updated <relative-time datetime="${updatedAt ? updatedAt : ""}" title="">${
				updatedAt ? updatedAt : ""
			}</relative-time>
						</span>
					</div>
				</div>
			`;
		});
		this.userRepos.innerHTML = output;
	}
}
