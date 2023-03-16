//Class & objects in Javascript
class Fruit{
    constructor(name){
        this.name =name;
    }

    //Default method which it needs to call after declared 
    fool(){
        console.log(`${this.name} is very tastey`);
    }

    //we can add static methods direct after the declration of
    //methods

    static JackFruit(){
        console.log('Jack fruit is a popular fruit');
    }
 }
 var add = new Fruit("Mango");
add.fool();

// Fruit.JackFruit();