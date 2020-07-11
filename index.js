
console.log('Before');

// Callback - can become messy!!
/*getUser(1, (user) => {
	console.log('User: ', user);
	getRepositories(user, (repos) => {
		console.log('Repos: ' , repos)
	})
});
*/

// Clean callback below by using promises
getUser(1)
	.then(user => getRepositories(user.gitHubUsername))
	.then(repos => getCommits(repos[0]))
	.then(commits => console.log('Commits', commits))
	.catch(err => console.log('Error', err.message));


console.log('After');

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