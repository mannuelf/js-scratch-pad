// 1.

// WITHOUT default function arguments
function makeAjaxRequest(url, method) {
    if (!method) {
        method = 'GET'
    }
}

// WITH default function arguments
function makeAjaxRequest(url, method = 'GET') {
    return method
}

makeAjaxRequest('themwebs.me', null)
makeAjaxRequest('themwebs.me', undefined)
makeAjaxRequest('themwebs.me', 'GET')


// 2.

// web app, make a function that will create a user object

function User() {
    this.id = id
}

function generateId() {
    return Math.random() * 999999
}

function createAdminUser( user = new User(generateId()) ) {
    user.admin = true
    return user
}

let user = new User(generateId())
createAdminUser(user)
