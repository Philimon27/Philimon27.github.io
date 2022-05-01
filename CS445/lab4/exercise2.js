class User{
    constructor(name){
        this.name=name;
    }
    logger(){
      console.log("user :" + this.name)
    }
}

class DecoratedUser{

    constructor(user,street,city){
        this.user=user;
        this.name=user.name;
        this.street=street;
        this.city=city;
    }
    logger(){
        console.log("decorated User: " + this.name + "," + this.street + "," + this.city)
    }
}

    const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();

