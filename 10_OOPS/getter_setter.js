class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    // get password(){
    //     return this._password.toUpperCase();
    // }

    get email(){
        return this._email.toUpperCase()
    }

    set email(mail){
        this._email = mail;
    }

    get password(){
        return `${this._password}rohit`; //For privacy - we have real password "abc" but other people will get to know "abcrohit" as password
    }

    set password(value){
        this._password = value;
    }
}

const rohit = new user("ro@gmail.com","abc")
console.log(rohit.password);
console.log(rohit.email)
