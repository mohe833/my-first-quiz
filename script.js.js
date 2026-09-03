let user = "";
let score = 0;
let currentIndex = 0;

let wrongAnswers = [];

const wortliste = [

{
    word: "At-Zeichen",
    plural: "At-Zeichen",
    image: "images/at_zeichen.jpg",
    category: "ICT"
  },
  {
    word: "der Laptop",
    plural: "Laptops",
    
    image: "images/laptop.jpg",
    category: "ICT"
  },
  {
    word: "der Bildschirm / der Monitor",
    plural: "Bildschirme / Monitore",
    image: "images/bildschirm_monitor.jpg",
    category: "ICT"
  },
  {
    word: "die Tastatur",
    plural: "Tastaturen",
    image: "images/tastatur.jpg",
    category: "ICT"
  },
  {
    word: "der Akku ist leer",
    plural: "-",
    image: "images/akku_leer.jpg",
    category: "ICT"
  },
  {
    word: "der Computer (PC)",
    plural: "Computer",
    image: "images/computer.jpg",
    category: "ICT"
  },
  {
    word: "teams",
    plural: "-",
    image: "images/teams.jpg",
    category: "ICT"
  },
  {
    word: "der Akku ist voll",
    plural: "-",
    image: "images/akku_voll.jpg",
    category: "ICT"
  },
  {
    word: "aufladen",
    plural: "-",
    image: "images/aufladen.jpg",
    category: "ICT"
  },
  {
    word: "das Word",
    plural: "-",
    image: "images/word.jpg",
    category: "ICT"
  },
  {
    word: "das Internet / das Symbol",
    plural: "Symbole",
    image: "images/internet_symbol.jpg",
    category: "ICT"
  },
  {
    word: "die Maus",
    plural: "Mäuse",
    image: "images/maus.jpg",
    category: "ICT"
  },
  {
    word: "die linke Maustaste",
    plural: "linken Maustasten",
    image: "images/linke_maustaste.jpg",
    category: "ICT"
  },
  {
    word: "die rechte Maustaste",
    plural: "rechten Maustasten",
    image: "images/rechte_maustaste.jpg",
    category: "ICT"
  },
  
  {
    word: "der USB-Stick",
    plural: "USB-Sticks",
    image: "images/usb_stick.jpg",
    category: "ICT"
  },
  {
    word: "das Ladegerät",
    plural: "Ladegeräte",
    image: "images/ladegerät.jpg",
    category: "ICT"
  },
  {
    word: "der Drucker",
    plural: "Drucker",
    image: "images/drucker.jpg",
    category: "ICT"
  },
  {
    word: "die Taskleiste",
    plural: "Taskleisten",
    image: "images/taskleiste.jpg",
    category: "ICT"
  },
  {
    word: "speichern",
    plural: "-",
    image: "images/speichern.jpg",
    category: "ICT"
  }

];

wortliste.sort(() => Math.random() - 0.5);

function startQuiz(){

user = document.getElementById("username").value.trim();

if(user === ""){
alert("Bitte Namen eingeben!");
return;
}

document.getElementById("start-section").style.display="none";
document.getElementById("quiz-section").style.display="block";

showQuestion();

}

function showQuestion(){

if(currentIndex >= wortliste.length){
endQuiz();
return;
}

const current = wortliste[currentIndex];

document.getElementById("progress").innerText =
`Frage ${currentIndex+1} von ${wortliste.length}`;

document.getElementById("category").innerText =
`Kategorie: ${current.category}`;

document.getElementById("word-image").src =
current.image;

document.getElementById("question").innerText =
`Was ist der Plural von "${current.word}"?`;

document.getElementById("answer").value="";
document.getElementById("feedback").innerText="";

document.getElementById("score").innerText =
`${user}: ${score} Punkte`;

}

function checkAnswer(){

const current = wortliste[currentIndex];

const userAnswer =
document.getElementById("answer")
.value
.trim();

if(userAnswer.toLowerCase() === current.plural.toLowerCase()){

score++;

document.getElementById("feedback").innerText =
"✅ Richtig!";

document.getElementById("feedback").style.color =
"green";

}else{

wrongAnswers.push(
`${current.word} → ${current.plural}`
);

document.getElementById("feedback").innerText =
`❌ Falsch! Richtige Antwort: ${current.plural}`;

document.getElementById("feedback").style.color =
"red";
}

currentIndex++;

setTimeout(showQuestion,2000);

}

function endQuiz(){

let mistakes = "";

if(wrongAnswers.length > 0){

mistakes =
"<h3>Fehler:</h3><ul>";

wrongAnswers.forEach(item=>{
mistakes += `<li>${item}</li>`;
});

mistakes += "</ul>";

}

document.getElementById("quiz-section").innerHTML =

`
<h2>🎉 Quiz beendet!</h2>

<p>${user}, du hast ${score}
von ${wortliste.length}
richtig.</p>

${mistakes}
`;

}

document.addEventListener("keydown",function(event){

if(event.key==="Enter"){
document.getElementById("confirm-btn").click();
}

});