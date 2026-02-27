alert("Wenn der Plural und Singular gleich sind, nimm bitte -")
let user = "";

let score = 0;

let currentIndex = 0;

const wortliste = {
 
    "die Apotheke": "Apotheken",
    "der Arzt": "Ärzte",
    "das Blut": "-",
    "das Fieber": "-",
    "die Grippe": "Grippen",
    "der Husten": "-",
    "die Krankheit": "Krankheiten",
    "das Haustier": "Haustiere",
    "das Medikament": "Medikamente",
    "die Operation": "Operationen",
    "das Kamel": "Kamele",
    "das Pflaster": "-",
    "die Salbe": "Salben",
    "der Schmerz": "Schmerzen",
    "das Spital": "Spitäler",
    "die Spritze": "Spritzen",
    "die Tablette": "Tabletten",
    "die Verletzung": "Verletzungen",
    "die Ärztin": "Ärztinnen",
    "das Bauchweh": "-",
    "das Fieberthermometer": "-",
    "der Krankenpfleger": "-",
    "die Krankenschwester": "Krankenschwestern",
    "der Krankenwagen": "-",
    "der Schnupfen": "-",
    "der Verband": "Verbände",
    "die Wunde": "Wunden",
    "der Zahnarzt": "Zahnärzte",
    "die Zahnärztin": "Zahnärztinnen"
};

const words = Object.keys(wortliste);

function startQuiz() {

    user = document.getElementById("username").value.trim();

    if (user === "") {

        alert("Bitte gib deinen Namen ein!");

        return;

    }

    document.getElementById("start-section").style.display = "none";

    document.getElementById("quiz-section").style.display = "block";

    document.getElementById("score").innerText = `${user}, dein Punktestand: 0 von ${words.length}`;

    showQuestion();

}

function showQuestion() {

    if (currentIndex < words.length) {

        const currentWord = words[currentIndex];

        document.getElementById("question").innerText = `Was ist der Plural von "${currentWord}"?`;

        document.getElementById("answer").value = "";

        document.getElementById("feedback").innerText = "";

    } else {

        endQuiz();

    }

}

function checkAnswer() {

    const currentWord = words[currentIndex];

    const correctAnswer = wortliste[currentWord];

    const userAnswer = document.getElementById("answer").value.trim();

    if (userAnswer === correctAnswer) {

        score++;

        document.getElementById("feedback").innerText = `✅ Richtig, ${user}!`;

        document.getElementById("feedback").style.color = "green";

    } else {

        document.getElementById("feedback").innerText = `❌ Falsch! Die richtige Antwort ist "${correctAnswer}".`;

        document.getElementById("feedback").style.color = "red";

    }

    document.getElementById("score").innerText = `${user}, dein Punktestand: ${score} von ${words.length}`;

    currentIndex++;

    setTimeout(showQuestion, 3000); // waits 3 seconds before next question

}

function endQuiz() {

    document.getElementById("quiz-section").innerHTML = `
<h2>Quiz beendet!</h2>
<p>${user}, du hast ${score} von ${words.length} richtig.</p>
<p>Vielen Dank fürs Spielen! 👏</p>

    `;

}
 