alert("Wenn der Plural und Singular gleich sind, nimm bitte -")
let user = "";

let score = 0;

let currentIndex = 0;

const wortliste = {
 
    "die Ente": "Enten",
    "der Esel": "-",
    "das Fell": "Felle",
    "der Fisch": "Fische",
    "der Frosch": "Frösche",
    "das Futter": "-",
    "der Hahn": "Häne",
    "der Hase": "Hasen",
    "das Haustier": "Haustiere",
    "das Huhn": "Hüner",
    "der Hund": "Hunde",
    "das Kamel": "Kamele",
    "die Katze": "Katzen",
    "die Kuh": "Kühe",
    "der Löwe": "Löwen",
    "die Maus": "Mäuse",
    "das Pferd": "Pferde",
    "das Schaf": "Schafe",
    "die Schlange": "Schlangen",
    "der Schwanz": "Schwänze",
    "das Schwein": "Schweine",
    "der Stall": "Ställe",
    "das Tier": "Tiere",
    "der Vogel": "Vögel",
    "der Affe": "Affen",
    "die Ameise": "Ameisen",
    "das Aquarium": "Aquarien",
    "der Bär": "Bären",
    "die Biene": "Bienen",
    "Elefant": "Elefanten",
    "die Feder": "Federn",
    "die Fliege": "Fliegen",
    "der Flügel": "-",
    "der Fuchs": "Füchse",
    "das Horn": "Hörner",
    "der Käfer": "-",
    "der Käfig": "Käfige",
    "der Igel": "-",
    "das Känguru": "Kängurus",
    "das Krokodil": "Krokodile",
    "die Mücke": "Mücken",
    "die Muschel": "Muscheln",
    "die Pfote": "Pfoten",
    "das Reh": "Rehe",
    "der Schnabel": "Schnäbel",
    "die Schnecke": "Schnecken",
    "die Wespe": "Wespen",
    "der Wolf": "Wölfe",
    "der Wurm": "Würmer",
    "das Zebra": "Zebras",
    "die Ziege": "Ziegen",
    "der Zoo": "Zoos"


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

    setTimeout(showQuestion, 3000); // waits 5000 seconds before next question

}

function endQuiz() {

    document.getElementById("quiz-section").innerHTML = `
<h2>Quiz beendet!</h2>
<p>${user}, du hast ${score} von ${words.length} richtig.</p>
<p>Vielen Dank fürs Spielen! 👏</p>

    `;

}
 