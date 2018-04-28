let users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];

// has all the users submitted a request form? 
let hasSubmitted = users.every((user) => {
    return users.hasSubmitted === true;
});

// will return false because the iterator function will 
// find at least on falsey value


let requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];
  
let inProgress = requests.some((request) => {
    return request.status === 'pending';
});