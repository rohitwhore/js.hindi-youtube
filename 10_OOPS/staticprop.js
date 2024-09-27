class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // static keyword will not give access to any other .Also not to child nodes
        return `123`
    }
}

const rohit = new User("rohit")
// console.log(rohit.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); // will not able to access createId