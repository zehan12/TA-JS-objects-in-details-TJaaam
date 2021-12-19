let animalMethods = {
    eat: function(location){
        this.location = location
        alert(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
        return newLocation;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    },
}

let dogMethods = {
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor: function(newColor){
        this.color = newColor;
        return this.color;
    },
    summary: function(){
        return `I am ${name} and I am of ${this.color} color. I can also bark`;
    },
}

let catMethods = {
    meow: function(){
        alert(`I am ${name} and I can do mewo meow 😹`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes: function(newColor){
        this.color = newColor;
        return this.color;
    },
    summary: function(){
        return `I am ${name} and I am of ${this.color} color. I can also bark`;
    },
}

Object.setPrototypeOf(dogMethods,animalMethods);
Object.setPrototypeOf(catMethods,animalMethods);

function createAnimal(location,numberOfLegs){
    let animal = Object.create(animalMethods);
    this.location = location;
    this.numberOfLegs = numberOfLegs;
    return animal; 
}

function createDog( name, color){
    let dog = Object.create(dogMethods);
    this.name = name;
    this.color = color;
    return dog;
}

function createCat( name, colorOfEye ){
    let cat = Object.create(catMethods);
    this.name = name;
    this.colorOfEye = colorOfEye;
    return cat;
}

