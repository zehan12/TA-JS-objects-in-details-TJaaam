console.log("hello") 
const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };

// consturct the Quiz App for one Question

let title = "Where is the capital of Jordan ?";
let option = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswere = 1;

let h1 = document.querySelector("h1")
h1.innerText = title
let btn = document.querySelectorAll("div button")
btn.forEach((op,i)=>{
  btn[i].innerText = option[i]
  op.addEventListener("click", function() {
  let index = op.getAttribute("class");
  let div = document.createElement("DIV");
  div.classList.add("font")
  let result = document.querySelector(".result");
  result.append(div)
    if(index == correctAnswere){
       div.innerText ="true";
       
    } else{
        div.innerText ="false";
       
    }
})
})

// Without Object

let title = question1;
let options = ["a","b","c","d"];
let correctAnswerIndex = 3;

function isAnswereCorrect(index){
    if(index === correctAnswerIndex){
        return true;
    } else {
        return false;
    }
}

function getCorrect(){
    return correctAnswerIndex
}

// With Object

let user ={
    title: question1,
    options:["a","b","c","d"],
    correctAnswerIndex: 3,

    isAnswereCorrect(index){
        if(index === correctAnswerIndex){
            return true;
        } else {
            return false;
        }
    },

    isAnswereCorrect(){
        return correctAnswerIndex
    }

}

// Create Object With Function 

function createUser(title,option,correctAnswere){
    let user ={};
    user.title = title;
    user.option = option;
    user.correctAnswere = correctAnswere;

    user.isAnswereCorrect(index){
        if(index === correctAnswerIndex){
            return true;
        } else {
            return false;
        }
    }

    user.isAnswereCorrect(){

    }
}

// Create Object with This Keyword

function createUser(title,option,correctAnswere){
    let user ={};
    user.title = title;
    user.option = option;
    user.correctAnswere = correctAnswere;

    user.isAnswereCorrect(index){
        if(index === correctAnswerIndex){
            return true;
        } else {
            return false;
        }
    }

    user.isAnswereCorrect(){

    }
}

