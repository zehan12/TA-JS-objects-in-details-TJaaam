### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
- Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
- Create using class
- Write test by creating two objects also test both methods.

### To test use the following data

You can use the data given below. You will also have to change the name of the function while calling them.

```js
let firstQuestion = new Question(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Question(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);


// Factory pattern

// function createUser( title, option, correctAnswerIndex ){
//   let user = {};
//   user.title = title;
//   user.option = option;
//   user.correctAnswerIndex = correctAnswerIndex;

//   user.isAnswerCorrect = function(){
//     if (   )
//   }  
// }


// Prototypal pattern 

let userMethod = {
  isAnswerCorrect = function(index){
    if( correctAnswerIndex === index  ){
      return true;
    } else {
      return false;
    }
  },

  getCorrectAnswer = function(){
    return correctAnswerIndex;
  }
};

function createQuestion( title, options,  answerIndex){
  let question = Object.create(userMethods);
  question.title = title;
  question.options = options;
  question.answerIndex = answerIndex;
  return question
}

// Pseudoclassical pattern 

function createQuestion( title, options, answerIndex ){
  this.title = title;
  this.options = options;
  this.answerIndex = answerIndex;
}

CreateQuestion.prototype = {
    isAnswerCorrect:function(index){
      return correctAnswerIndex === index
    },
    getCorrectAnswer:function(){
      return correctAnswerIndex;
    }
}

// class Pattern

class Quiz{
  constructor ( question, options, answerIndex ){
    this.question = question;
    this.options =  options;
    this.answerIndex = answerIndex;
  }

  isAnswerCorrect(){
    return correctAnswerIndex === index;
  }
  getCorrectAnswer:function(){
    return correctAnswerIndex;
  }
}
```
