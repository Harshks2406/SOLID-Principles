//We have created different classes for different questions. 
//If we have to add new question we make a new class(i.e. extend),
//and we dont have to disturb the previous classes(i.e. modification).

class BooleanQuestions{
    constructor(description){
        this.description = description
    }

    printQuestion(){
        console.log('1. True')
        console.log('2. False')
    }
}

class TextQuestions{
    constructor(description){
        this.description = description
    }

    printQuestion(){
        console.log('Answer: __________')
    }
}

class RangeQuestion{
    constructor(description){
        this.description = description
    }
    printQuestion(){
        console.log('Minimum: __________')
        console.log('Maximum: __________')
    }
}

function printQuiz(questions){
    questions.forEach(question=>{
        console.log(question.description)
        question.printQuestion()
        console.log(' ')
    })
}

const questions = [
    new BooleanQuestions('Are you a Student?'),
    new TextQuestions('Describe about SOLID Principles.'),
    new RangeQuestion('What is the speed limit in your city?')
]

printQuiz(questions)