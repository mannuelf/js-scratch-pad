
/*
	In computer science, a Linked list is a linear collection of data elements,
	whose order is not given by their physical placement in memory.
	Instead, each element points to the next. It is a data structure consisting of a
	collection of nodes which together represent a sequence.

	In its most basic form, each node contains: data, and a reference (in other words,
	a link) to the next node in the sequence.
	This structure allows for efficient insertion or removal of elements from any
	position in the sequence during iteration.
	More complex variants add additional links, allowing more efficient insertion or
	removal of nodes at arbitrary positions.

	A drawback of linked lists is that access time is linear (and difficult to pipeline).
	Faster access, such as random access, is not feasible.
	Arrays have better cache locality compared to linked lists.
	https://en.wikipedia.org/wiki/Linked_list
*/

function LinkedList() {
	this.head = null
	this.tail = null
}

function Node(value, next, previous) {
	this.value = value
	this.next = next
	this.previous = previous
}

LinkedList.prototype.addToHead = function(value) {
	let newNode = new Node(value, this.head, null)

	if (this.head) {
		this.head.previous = newNode
	} else {
		this.tail = newNode
	}
	this.head = newNode
}

let ll = new LinkedList()

ll.addToHead(100)
ll.addToHead(200)
ll.addToHead(300)

console.log(ll)
