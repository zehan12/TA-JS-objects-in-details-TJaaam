## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

```js
class Person{
    constructor( name, age, gender ){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        alert("I am Eating");
    }
    sleep(){
        alert("I am Sleeping")
    }
    walk(){
        alert("I am Walking")
    }
}

class Player extends Person{
    constructor(sportsName){
        this.sportsName = sportName;
    }
    play(){
        alert(`I am playing ${this.sportsName}`)
    }
}

class Cricketer extends Player{
    constructor(teamName){
        alert(`I am playing cricket from ${this.teamName}`)
    }
}

class Teacher extends Person{
    constructor(instituteName){
        this.instituteName = instituteName;
    }
    teach(){
        alert(){
            alert(`I am teaching in ${this.instituteName}`)
        }
    }
}

class Artist extends Person{
    constructor(kind){
        this.kind = kind;
    }
    createArt(){
        alert(`I create ${this.kind} kind of art`)
    }
}

```