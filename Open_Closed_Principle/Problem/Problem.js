//A Class Should be open for extension but not for modifications.
//Here if we have to add a new question then we have to change the main logic of the code.
//(i.e. we are modifying it not extending it)

function printQuiz(questions){
    questions.forEach(question=>{
        console.log(question.description)
        switch(question.type){
            case 'boolean': 
                console.log('1. True')
                console.log('2. False')
                break
            case 'text':
                console.log('Answer: __________')
                break
            // case 'range':
            //     console.log('Minimum: __________')
            //     console.log('Maximum: __________')
            //     break
        }
        console.log(' ')
    })
}

const questions = [
    {
        type: 'boolean',
        description: 'Are you a Student?'
    },
    {
        type: 'text',
        description: 'Describe what are SOLID Principles.'
    }//,
    // {
    //     type: 'range',
    //     description: 'What is the Speed limit in your areas?'
    // }
]

printQuiz(questions)