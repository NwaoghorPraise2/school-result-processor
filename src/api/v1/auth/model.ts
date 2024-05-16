class User {
    private name: string;
    private role: string;

    constructor(name: string, role:string){
        this.name = name;
        this.role = role;
    }

    createUser(){
        console.log(this.name );
        console.log(this.role );
    }
    
}


const user = new User("Praise", "admin");