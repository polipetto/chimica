// costanti
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// domandine
let questions = [
    {
        question : "Gli alcani sono:",
        imgSrc : "Immagini/icona2.0.png",
        choiceA : "Idrocarburi aromatici",
        choiceB : "Idrocarburi alifatici",
        choiceC : "Idrocarburi",
        correct : "B"
    },{
        question : "Gli alcani hanno ibridazione:",
        imgSrc : "Immagini/icona2.0.png",
        choiceA : "sp2",
        choiceB : "sp",
        choiceC : "sp3",
        correct : "C"
    },{
        question : "La formula molecolare degli alcani e':",
        imgSrc : "Immagini/icona2.0.png",
        choiceA : "Cn+Hn",
        choiceB : "C2n2+H2n+2",
        choiceC : "Cn+H2n+2",
        correct : "C"
    },{
        question : "Gli alcheni sono idrocarburi:",
        imgSrc : "Immagini/icona2.0.png",
        choiceA : "Saturi",
        choiceB : "Ciclici",
        choiceC : "Insaturi",
        correct : "C"
    },{
        question : "Gli alcheni sono caratterizzati dalla presenza di:",
        imgSrc : "Immagini/icona2.0.png",
        choiceA : "Un doppio legame",
        choiceB : "Una catena chiusa",
        choiceC : "Una rotazione attorno al legame",
        correct : "A"
    },{
        question : "L'ibridazione degli alcheni e':",
        imgSrc : "Immagini/icona2.0.png",
        choiceA : "sp3",
        choiceB : "sp",
        choiceC : "sp2",
        correct : "C"
    },{
        question : "Gli alchini sono:",
        imgSrc : "Immagini/icona2.0.png",
        choiceA : "Idrocarburi aromatici",
        choiceB : "Idrocarburi alifatici saturi",
        choiceC : "Idrocarburi alifatici insaturi",
        correct : "C"
    },{
        question : "Gli alchini sono insaturi per la presenza:",
        imgSrc : "Immagini/icona2.0.png",
        choiceA : "Del triplo legame",
        choiceB : "Della catena chiusa",
        choiceC : "Del legame SIGMA",
        correct : "A"
    },{
        question : "La formula molecolare degli alchini e':",
        imgSrc : "Immagini/icona2.0.png",
        choiceA : "Cn+H2n",
        choiceB : "C2n+H2n",
        choiceC : "Cn+H2n-2",
        correct : "C"
    },{
        question : "La purina è un eterociclo composto da quanti anelli?",
        imgSrc : "Immagini/icona2.0.png",
        choiceA : "2",
        choiceB : "3",
        choiceC : "4",
        correct : "A"
    },{
        question : "Che caratteristica hanno gli anelli degli areni policiclici condensati?",
        imgSrc : "Immagini/icona2.0.png",
        choiceA : "Sono costituiti da piu' anelli",
        choiceB : "Sono sovrapposti",
        choiceC : "Sono staccati",
        correct : "A"
    },{
        question : "Quale dei tre e' planare?",
        imgSrc : "Immagini/icona2.0.png",
        choiceA : "Ciclobutene",
        choiceB : "Cicloesene",
        choiceC : "Cicloottene",
        correct : "B"
    }
    
];

// variabili

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; 
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// comparimentazione domande
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// inizia
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000 ticchetti sono 1s
}

// va avanti
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// tempo passa

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // finisce tempo quindi va avanti
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // finto tutto mostra voto
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// controlla

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // giusto
        score++;
        // quindi diventa verde
        answerIsCorrect();
    }else{
        // sbagliato
        // quindi diventa rosso
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // mostra risultato
        clearInterval(TIMER);
        scoreRender();
    }
}

// corretto
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "mediumseagreen";
}

// sbagliato
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#ed6876";
}

// compariscisce risultato
function scoreRender(){
    scoreDiv.style.display = "flex";
    
    // matematicaaaa
    const percentuale = Math.round(100 * score/questions.length);
    
    // immagini percentuale
    let img = (percentuale >= 80) ? "img/5.png" :
              (percentuale >= 60) ? "img/4.png" :
              (percentuale >= 40) ? "img/3.png" :
              (percentuale >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ percentuale +"%</p>";
}

function mouseOver() {
    document.getElementById("ez").style.display = "block";
    }
function mouseOut() {
    document.getElementById("ez").style.display = "none";
    }


// menu a destra //
function mappadestra() {
    var click = document.getElementById("robodestra");
    if (click.style.gridTemplateRows === "53px 0px 25px"){
        document.getElementById("robodestra").style.gridTemplateRows = "53px 540px 25px";
        document.getElementById("schemolo").style.display = "block"; 
        document.getElementById("robodestra").style.gridTemplateColumns = "893.61px 66.39px";
        document.getElementById("freccetta").style.transform = "rotate(180deg)"; 
    }
    else {
        document.getElementById("robodestra").style.gridTemplateRows = "53px 0px 25px";
        document.getElementById("schemolo").style.display = "none";
        document.getElementById("robodestra").style.gridTemplateColumns = "0 66.39px";
        document.getElementById("freccetta").style.transform = "rotate(0deg)";  
    }
}
