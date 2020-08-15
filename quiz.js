
let currentQuestion = 0;
let correctAnswer = 0;
let progres = 0;
let allQuestions = [
    {
        'question': "Eine Schnecke klettert in einem Samstag früh auf einen 11 Meter hohen Baum. Wann ist die Schnecke oben, wenn sie tagsüber 3 Meter hinuaufsteigt und in der Nacht 1 Meter heruntersteigt?",
        'answer_1': "Montag",
        'answer_2': "Dienstag",
        'answer_3': "Mittwoch",
        'answer_4': "Donnerstag",

    },
    {
        'question': "In einem Parkhaus befinden sich 11 Motorräder und Autos, insgesamt sind es 36 Räder. Berechenen Sie sie die Anzahl von den Autos und von den Motorräder.",
        'answer_1': "Motorräder:4, Autos:7",
        'answer_2': "Motorräder:7, Autos:4",
        'answer_3': "Motorräder:6, Autos:5",
        'answer_4': "Motorrräder:3, Autos:8",

    },
    {
        'question': "Ein Vater ist älter mit 7 Jahre als seine Frau. Die Tochter ist junger mit 32 Jahre als ihre Mutter und mit 39 Jahre junger als sein Vatter. Wie alt ist jeder?",
        'answer_1': "Vatter:49, Mutter:42, Tochter:10",
        'answer_2': "Vatter:50, Mutter:43, Tochter:11",
        'answer_3': "Vatter:48, Mutter:41, Tochter:9",
        'answer_4': "Vatter:50, Mutter:42, Tochter:12",

    },

    {
        'question': "5 Kinder essen 5 Eis in 5 Minuten. Wie viele Kinder essen 6 Eis in 5 Minuten?",
        'answer_1': "6",
        'answer_2': "7",
        'answer_3': "10",
        'answer_4': "15",
        //'right_answer': 1,
    },
    {

        'question': "In wie viel Zeit brennen 2 Kerzen, wenn in die erste halbe Stunde die Brennzeit von der esten halbiert sich und in die nächste halbe Stunde die Brennzeit von der zweite halbiert sich auch? Jede Kerze brennt in 1 Stunde.",
        'answer_1': "60 Minuten",
        'answer_2': "45 Minuten",
        'answer_3': "90 Minuten",
        'answer_4': "105 Minuten",
        // 'right_answer': 2,
    },
    {
        'question': "Aus 3 Wasserhähne fließen 450 Liter. Der zweite Wasserhahn fließt 2 mal schneller als der erster und 3 mal langsamer als der letzte. Wie viel Liter Wasser fließt aus jeder?",
        'answer_1': "x=50L, y=100L, z=300L",
        'answer_2': "x=25L, y=50L, z=75",
        'answer_3': "x=75L, y=150L, z=225L",
        'answer_4': "x=100L, y=200L, z=300L",
        // 'right_answer': 1,
    },
    {
        'question': "In einem Schulraum, wenn man 3 Kinder an einem Tisch stellt dann bleiben 7 im stehen. Wenn man 5 an einem Tisch stellt dann bleiben 3 Plätze frei.",
        'answer_1': "5 Tische und 22 Schüler",
        'answer_2': "6 Tische und 21 Schüler",
        'answer_3': "7 Tische und 20 Schüler",
        'answer_4': "8 Tische und 25 Schüler",
        //'right_answer': 1,
    },
    {
        'question': "Ein elektrischer Zug fährt von Ost nach West. Vollgas geben fährt er mit 60km/Stunde. In dasselber Richtung von Ost nach West weht der Wind, mit 50 km/Stunde. In welcher Richtung geht das Rauch von dem Zug?",
        'answer_1': "West-Ost",
        'answer_2': "Ost-West",
        'answer_3': "West-Nord",
        'answer_4': "Kein Antwort ist richtig",
        // 'right_answer': 4,
    },
    {
        'question': "Es flogen ein paar Enten. Eine vorne und 2 hinten, eine hinten und 2 vorne, eine ist zwischen andere und 3 in einer Reihe. Wie viele Enten sind insgesamt geflogen?",
        'answer_1': "5",
        'answer_2': "6",
        'answer_3': "9",
        'answer_4': "3",
        //'right_answer': 4,
    },
    {
        'question': "Als mein Vater 31 alt war, war ich 8 Jahre. Nun ist er doppelt meines Alters. Wie alt bin ich?",
        'answer_1': "21",
        'answer_2': "22",
        'answer_3': "23",
        'answer_4': "31",
        // 'right_answer': 3,
    },

]

let rightAnswers = [3, 1, 1, 1, 2, 1, 1, 4, 4, 3];

function startGame() {
    document.getElementById('start-btn').classList.add('d-none');
    document.getElementById('image-brain').classList.add('d-none');
    document.getElementById('welcome').classList.add('d-none');



    loadFirstQuestion();
}

function loadFirstQuestion() {
    document.getElementById('answer_1').classList.remove('d-none');
    document.getElementById('answer_2').classList.remove('d-none');
    document.getElementById('answer_3').classList.remove('d-none');
    document.getElementById('answer_4').classList.remove('d-none');
    document.getElementById('question').innerHTML = allQuestions[0]['question'];
    document.getElementById('answer_1').innerHTML = allQuestions[0]['answer_1'];
    document.getElementById('answer_2').innerHTML = allQuestions[0]['answer_2'];
    document.getElementById('answer_3').innerHTML = allQuestions[0]['answer_3'];
    document.getElementById('answer_4').innerHTML = allQuestions[0]['answer_4'];
    document.getElementById('ready').classList.add('d-none');
    document.getElementById('back-btn').classList.remove('d-none');
    document.getElementById('next-btn').classList.remove('d-none');
    document.getElementById('win-img').classList.add('d-none');


}

function start() {
    document.getElementById('answer_1').classList.add('d-none');
    document.getElementById('answer_2').classList.add('d-none');
    document.getElementById('answer_3').classList.add('d-none');
    document.getElementById('answer_4').classList.add('d-none');
    document.getElementById('back-btn').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
    document.getElementById('win-img').classList.add('d-none');
    document.getElementById('ready').classList.remove('d-none');

}

function answer(a) {
    let rightAnswer = rightAnswers[currentQuestion];
    console.log('currentQuestion: ' + currentQuestion);
    console.log('Selected answer: ' + a);
    console.log('Right answer: ' + rightAnswer);


    let id = 'answer_' + a;


    if (rightAnswer == +a) { // Right Question
        document.getElementById(id).classList.remove('display-white');
        document.getElementById(id).classList.remove('false');
        document.getElementById(id).classList.add('right');

        progres = progres + 10;

        document.getElementById('progress-blue').innerHTML = progres + "%";
        document.getElementById('progress-blue').style.width = progres + "%";
    } else {

        document.getElementById(id).classList.add('false');
        document.getElementById(id).classList.remove('display-white');
        document.getElementById(id).classList.remove('right');

    }


}


function next() {
    currentQuestion = currentQuestion + 1;

    if (currentQuestion >= 0 && currentQuestion <= 9) {
        updateQuestion();
    }
    if (currentQuestion == 10) {
        letztefrage();

    }
}
function back() {
    currentQuestion = currentQuestion - 1;

    if (currentQuestion >= 0 && currentQuestion <= 9) {
        updateQuestion();
    }

    if (currentQuestion == 10) {

        letztefrage();
    }


}

function updateQuestion() {
    document.getElementById('answer_1').classList.add('display-white');
    document.getElementById('answer_2').classList.add('display-white');
    document.getElementById('answer_3').classList.add('display-white');
    document.getElementById('answer_4').classList.add('display-white');
    document.getElementById('question').innerHTML = allQuestions[currentQuestion]['question'];
    document.getElementById('answer_1').innerHTML = allQuestions[currentQuestion]['answer_1'];
    document.getElementById('answer_2').innerHTML = allQuestions[currentQuestion]['answer_2'];
    document.getElementById('answer_3').innerHTML = allQuestions[currentQuestion]['answer_3'];
    document.getElementById('answer_4').innerHTML = allQuestions[currentQuestion]['answer_4'];
}
function letztefrage() {
    document.getElementById('question').classList.add('d-none');
    document.getElementById('answer_1').classList.add('d-none');
    document.getElementById('answer_2').classList.add('d-none');
    document.getElementById('answer_3').classList.add('d-none');
    document.getElementById('answer_4').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
    document.getElementById('back-btn').classList.add('d-none');
    document.getElementById('win-img').classList.remove('d-none');
    document.getElementById('score').innerHTML = progres / 10 + "/10";
}
function startAgain() {
    document.getElementById('start-btn').classList.remove('d-none');
    document.getElementById('image-brain').classList.remove('d-none');
    document.getElementById('welcome').classList.remove('d-none');
    document.getElementById('question').classList.remove('d-none');
    document.getElementById('answer_1').classList.remove('d-none');
    document.getElementById('answer_2').classList.remove('d-none');
    document.getElementById('answer_3').classList.remove('d-none');
    document.getElementById('answer_4').classList.remove('d-none');

    loadFirstQuestion();
    document.getElementById('answer_1').classList.add('display-white');
    document.getElementById('answer_2').classList.add('display-white');
    document.getElementById('answer_3').classList.add('display-white');
    document.getElementById('answer_4').classList.add('display-white');
    document.getElementById('start-btn').classList.add('d-none');
    document.getElementById('image-brain').classList.add('d-none');
    document.getElementById('welcome').classList.add('d-none');

    currentQuestion = 0;
    progres = 0;
    document.getElementById('progress-blue').innerHTML = progres + '%';
    document.getElementById('progress-blue').style.width = progres + '%';
    console.log("play again");
}
