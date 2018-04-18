
let post = { id: 5, title: 'JavaScript is awesome' };
let comments = [
	{ postId: 1, content: 'awesome reading' },
	{ postId: 2, content: 'some other comment' },
	{ postId: 3, content: 'I like this stuff' },
	{ postId: 4, content: 'learning all day, every day' },
];

function getComments(post, comments) {
	return comments.filter((comment) => {
		return comment.postId === post.id
	});
}

const filteredComments = getComments(post, comments);

console.log(filteredComments);
