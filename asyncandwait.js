//Async and Wait Approach

async function displayCommits() {

	try {
		const user = await getUser(1);
		const repos = getRepositories(user.gitHubUsername);
		const commits = getCommits(repos[0]);
		console.log(commits);
	}
	catch (err) {
		console.log('Error: ', err.message);
	}
}

displayCommits();


function getUser(id) {
	return new Promise((resolve, reject) => {
		// Kick of the async work
		setTimeout(() => {
			console.log("Reading a user from a database....");
			resolve({ id: id, gitHubUsername: 'Brandt' });
		}, 2000);
	});
}


function getRepositories(userName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Reading repos....");
			resolve(['repo1', 'repo2', 'repo3']);
			//reject(new Error('Could not get repos.')); // test reject
		}, 2000);
	});
}

function getCommits(repo) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Calling GitHub APi...");
			resolve(['commit']);
		}, 2000);
	});
}
