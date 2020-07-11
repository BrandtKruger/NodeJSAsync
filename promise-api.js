// Maybe use when testing, promises is already resolved
const p = Promise.resolve({ id: 1 });
p.then(result => console.log(result));

// Already Rejected
// Create new Error OBJ, will show the callstack
const p1 = Promise.reject(new Error('Give reason for rejection')); 
p1.catch(error => console.log(error));

// Parallel Promises - When both process is finished retun result
// First Promise
const p2 = new Promise((resolve) => { // Remove reject becuase we want to resolve
	setTimeout(() => {
		console.log('Async operation 1...');
		resolve(1);
	}, 2000);
});

// Second Promise - Failed
const p3 = new Promise((resolve, reject) => { 
	setTimeout(() => {
		console.log('Async operation 2...');
		reject(new Error('Something failed'));
	}, 2000);
});

Promise.all([p2, p3])
	.then(result => console.log(result))
	.catch(err => console.log('Error', err.message));


// Parallel Promises - When both process is finished retun result
// First Promise
const p4 = new Promise((resolve) => { // Remove reject becuase we want to resolve
	setTimeout(() => {
		console.log('Async operation 3...');
		resolve(1);
	}, 2000);
});

// Second Promise
const p5 = new Promise((resolve) => { // Remove reject becuase we want to resolve
	setTimeout(() => {
		console.log('Async operation 4...');
		resolve(2);
	}, 2000);
});

// Do something as soon as one is complete
Promise.race([p4, p5])
	.then(result => console.log(result))
	.catch(err => console.log('Error', err.message));


