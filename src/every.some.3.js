class Field {
    constructor(value) {
        this.value = value;
    }
}

let username = new Field("silverman")
let password = new Field("my_password")
let birthdate = new Field("10/10/1982")

let fields = [username, password, birthdate]

Field.prototype.validate = function() {
    return this.value.length > 0
}

const formIsValid = fields.every((field) => {
    return field.validate()
})

if (formIsValid) {
    console.log("user is valid and can log in")
} else {
    console.log("not valid")
}

username.validate()
console.log(username.validate())

// username.validate() && password.validate()
// use every instead of the &&