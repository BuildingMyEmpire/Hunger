var myQuestions = [
    {
        question: "In New Jersey, which county hosts the highest food insecurity rate?",
        answers: {
            a: 'Hudson County',
            b: 'Essex County',
            c: 'Passaic County'
        },
        correctAnswer: 'b'
    },
    {
        question: "What percentage of the State's population struggle with food insecurity?",
        answers: {
            a: '7%--About 600 K people',
            b: '17.5%--About 1.5 M people',
            c: '12%--About 1 M people'
        },
        correctAnswer: 'c'
    },
    {
        question: "How many Americans rely on food pantries and meal service programs to support their selves/families?",
        answers: {
            a: '1 in 7 Americans',
            b: '1 in 3 Americans',
            c: '1 in 9 Americans'
        },
        correctAnswer: 'a'
    },
    {
        question: "How many people are participating in the SNAP ('Hint - Supplemental Nutrition Assistance Program') program in NJ?",
        answers: {
            a: 'About 900 K',
            b: 'About 1.3 M',
            c: 'About 500 K'
        },
        correctAnswer: 'a'
    },
    {
        question: "What would you want for lunch?",
        answers: {
            a: 'Computer',
            b: 'Plastic',
            c: 'Pizza'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){

            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}
