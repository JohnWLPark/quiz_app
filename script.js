const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    }, 
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: 'Who is the President of the USA?',
        a: 'John Park',
        b: 'Bill Gates',
        c: 'Orange Man',
        d: 'Shigeru Miyamoto',
        correct: 'c'
    },
    {
        question: 'Who is the better brother, Mario or Luigi?',
        a: 'Mario',
        b: 'Luigi',
        c: 'Both',
        d: 'Mario Lopez',
        correct: 'c'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hyper-Text Markup Language',
        b: 'Cascading Style Sheets',
        c: "Horny Tahitian Monkey Love",
        d: 'Hellish Trouble Motorcycle Limbo',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '19952077',
        c: '2018',
        d: 'None of the above',
        correct: 'd'
    }
]


const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');

const b_text = document.getElementById('b_text');

const c_text = document.getElementById('c_text');

const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

let score = 0;


loadQuiz();



function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');

    const answer = undefined;

    answerEls.forEach((answerEl) => {
       if(answerEl.checked) {
            answer = answerEl.id
       }
    });

    return undefined;
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if(answer) {
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // TODO: Show results
            alert("You finished! Pat yourself on the back.");
        }
    }
})