"use strict"

var huidigeVraag = 0;
var score = 0;

var correctAnswer =
    ["A", "C", "B", "B", "D", "B", "A", "D", "A", "D", "B", "C", "D", "C", "B", "B", "D", "B", "A", "C"];

var vragenList = [
    "1.Waar staat de afkorting HTML voor?",
    "2.Met welke programma verander je het uiterlijk van een website?",
    "3. Waar staat de afkorting css voor?",
    "4. Wat doet padding?",
    "5. Op welke manier sluit je &ltdiv>?",
    "6. Welke van deze vier antwoorden is genoteerd in de Pascal Case?",
    "7. Wat is een functie?",
    "8. Hoe gebruik je javascript in HTML?",
    "9. Hoe verberg je alle schermen door middel van een functie?",
    "10. Hoe formateer je een code in VSC?",
    "11. Wat is de juiste manier om via CSS de tekst rood te maken?",
    "12. Welke van de onderstaande antwoorden is juist?",
    "13. Welke van de vier mogelijkheden past bij marge?",
    "14. Wat gebeurd er met element.style.property?",
    "15. Wat is een MVP?",
    "16. Wat is een commit?",
    "17. Welk van de onderstaande antwoorden is onjuist?",
    "18. Hoe maak je een HTML-element dikgedrukt?",
    "19. Wat is het grootste HTML-element?",
    "20. Wat is meestal het eerste voorbeeld van elke programmeertaal?"
];

var answerList =
    [["<b>A:</b> HyperText Markup Language",
        "<b>B:</b> High Tech Managing Link",
        "<b>C:</b> Hyper Tactic Mutual Link",
        "<b>D:</b> Hyper Tech Managing Link"],
    ["<b>A:</b> HTML",
        "<b>B:</b> Javascript",
        "<b>C:</b> CSS",
        "<b>D:</b> Paint"],
    ["<b>A:</b> Cascading scripting Sheets",
        "<b>B:</b> Cascading Style Sheets",
        "<b>C:</b> Crescending Style Sheets",
        "<b>D:</b> Creative Style Sheets"],
    ["<b>A:</b> Het zorgt ervoor dat er tekst en afbeeldingen verschijnen in de inhoud van het vak",
        "<b>B:</b> Wist een gebied rond de inhoud. De opvulling is transparant",
        "<b>C:</b> Vormt een rand die rond de vulling en inhoud loopt",
        "<b>D:</b> Wist een gebied buiten de grens. De marge is transparant"],
    ["<b>A:</b>  &ltdiv&gt    ",
        "<b>B:</b> &ltdiv/&gt    ",
        "<b>C:</b> &lt/div/&gt    ",
        "<b>D:</b> &lt/div&gt    "],
    ["<b>A:</b>  Firstname, Lastname    ",
        "<b>B:</b> FirstName, LastName    ",
        "<b>C:</b> firstname, lastname    ",
        "<b>D:</b> firstName, lastName    "],
    ["<b>A:</b>  Een functie is een blok code dat ontworpen is om een bepaalde taak uit te voeren en wordt ook aangeroepen  ",
        "<b>B:</b> Een functie is wat de computer moet van alles wat in een CSS geschreven staat    ",
        "<b>C:</b> Een functie wat wordt verricht om een code wat tussen <script> en <script> geschreven staat   ",
        "<b>D:</b> Een taak dat wordt verricht in javascript en deze hoeft niet opgeroepen te worden om de functie uit te voeren    "],
    ["<b>A:</b> Een code tussen &ltjavascript> en &lt/javascript> schrijven     ",
        "<b>B:</b> Een code tussen &ltjava> en &lt/java> schrijven    ",
        "<b>C:</b> Een code tussen &ltscript> en &ltscript> schrijven    ",
        "<b>D:</b> Een code tussen &ltscript> en &lt/script> schrijven    "],
    ["<b>A:</b> met de functie: hideAllPages     ",
        "<b>B:</b> met de functie: verbergAlleSchermen    ",
        "<b>C:</b> met de functie: noDisplayPages    ",
        "<b>D:</b> met de functie: don’t display a page    "],
    ["<b>A:</b> Shift + Alt+ R     ",
        "<b>B:</b> Shift + Ctrl + R   ",
        "<b>C:</b> Shift + Ctrl + F    ",
        "<b>D:</b> Shift + Alt + F    "],
    ["<b>A:</b> p { color; red: }     ",
        "<b>B:</b> p { color: red; }     ",
        "<b>C:</b> p ( color; red}    ",
        "<b>D:</b> p { color: red: }     "],
    ["<b>A:</b>  Decrement is hetzelfde als ++ i = i + 1 is gelijk aan i++     ",
        "<b>B:</b> Increment -- i = i – 1 is gelijk aan i--    ",
        "<b>C:</b> De modulus is één van de operatoren    ",
        "<b>D:</b> === betekent: ‘Gelijkwaardig aan’   "],
    ["<b>A:</b> De inhoud van het vak, waar tekst en afbeeldingen verschijnen     ",
        "<b>B:</b> Een rand die rond de vulling en inhoud loopt    ",
        "<b>C:</b> Wist een gebied rond de inhoud en dit is transparant    ",
        "<b>D:</b> Wist een gebied buiten de rand en dit is transparant    "],
    ["<b>A:</b> Verander de input-waarde     ",
        "<b>B:</b> Vind een element bij zijn id    ",
        "<b>C:</b> Verander de stijl van een element    ",
        "<b>D:</b> Verander de Javascript binnen een element    "],
    ["<b>A:</b> Matrix Vector Proces     ",
        "<b>B:</b>  minimum viable product   ",
        "<b>C:</b>  maximum viable product   ",
        "<b>D:</b>  minimum variable product   "],
    ["<b>A:</b>  Opslaan van veranderingen    ",
        "<b>B:</b> Opslaan van permanente veranderingen    ",
        "<b>C:</b> Het opslaan van alleen HTML-elementen    ",
        "<b>D:</b> Opslaan van commando’s van de computertaal SQL    "],
    ["<b>A:</b> Javascript kan niet gebruikt worden in HTML     ",
        "<b>B:</b> Je kan een foto op de achtergrond zetten via CSS  ",
        "<b>C:</b> De opmaak van buttons veranderen kan via CSS   ",
        "<b>D:</b> &ltabbr> is geen inline element in HTML   "],
    ["<b>A:&lt/b>  &ltb/>     ",
        "<b>B:&ltb>  &lt/b>    ",
        "<b>C:&lt/b>  &lt/b/>    ",
        "<b>D:&lt/b>  &ltb>    "],
    ["<b>A:</b> &lth1>     ",
        "<b>B:</b>  &lth5>   ",
        "<b>C:</b>  &lth4>    ",
        "<b>D:</b>  &lth6>   "],
    ["<b>A:</b> Hello     ",
        "<b>B:</b> Welcome world    ",
        "<b>C:</b> Hello, world    ",
        "<b>D:</b> Welcome    "],

    ];


/**
 * Add actions to page buttons 
 */
function addButtonActions() {
    var startButton = document.getElementById('button-start');
    var questionsButton = document.getElementById('button-questions');
    var checkButton = document.getElementById("checkbutton");
    var button_a = document.getElementById('button_a');
    var button_b = document.getElementById('button_b');
    var button_c = document.getElementById('button_c');
    var button_d = document.getElementById('button_d');
    var question = document.getElementById('quizVraag');

    question.innerHTML = vragenList[huidigeVraag];
    button_a.innerHTML = answerList[huidigeVraag][0];
    button_b.innerHTML = answerList[huidigeVraag][1];
    button_c.innerHTML = answerList[huidigeVraag][2];
    button_d.innerHTML = answerList[huidigeVraag][3];

    startButton.addEventListener("click", function () {
        showStartPage();
    });
    questionsButton.addEventListener("click", function () {
        showCheckPage();
    });
    checkButton.addEventListener("click", function () {
        handleCheckButton();
    });
    button_a.addEventListener("click", function () {
        showSelectedAnswer("A");
    });
    button_b.addEventListener("click", function () {
        showSelectedAnswer("B");
    });
    button_c.addEventListener("click", function () {
        showSelectedAnswer("C");
    });
    button_d.addEventListener("click", function () {
        showSelectedAnswer("D");
    });
}

//windows alert + functie voor loop
function showSelectedAnswer(selectedAnswer) {

    if (selectedAnswer == correctAnswer[huidigeVraag]) {
        window.alert('Je hebt gekozen voor antwoord: ' + selectedAnswer + "." + " Het gekozen antwoord is juist" + "." + " Goed gedaan!");

        console.log(score);
        score++;
    } else {
        window.alert('Je hebt gekozen voor antwoord: ' + selectedAnswer + "." + " Het gekozen antwoord is onjuist, het juiste antwoord is: " + correctAnswer[huidigeVraag]);
    }
    huidigeVraag++;
    document.getElementById('score').innerHTML = "Score:" + score;
    if (huidigeVraag > 19) {
        showlastpage();
    } else {

        // plak volgend vraag in html
        document.getElementById('quizVraag').innerHTML = vragenList[huidigeVraag];

        // plak antwoorden volgende vraag in html
        document.getElementById('button_a').innerHTML = answerList[huidigeVraag][0];
        document.getElementById('button_b').innerHTML = answerList[huidigeVraag][1];
        document.getElementById('button_c').innerHTML = answerList[huidigeVraag][2];
        document.getElementById('button_d').innerHTML = answerList[huidigeVraag][3];

    }
}

/**
 * Hide all pages
 */
function hideAllPages() {
    var startPage = document.getElementById('page-start');
    var questionsPage = document.getElementById('page-questions');
    var checkPage = document.getElementById('page-check');
    var lastpage = document.getElementById('page-last');

    startPage.style.display = 'none';
    questionsPage.style.display = 'none';
    checkPage.style.display = 'none';
    lastpage.style.display = 'none';

}

/**
 * Show start page
 */
function showStartPage() {
    var page = document.getElementById('page-start');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de startpagina');

}

/**
 * Show check page
 */
function showCheckPage() {
    var page = document.getElementById('page-check');

    hideAllPages();

    page.style.display = 'block';

    window.alert('Voer hier je studentennummer in');

}

/**
 * Show questions page
 */
function showQuestionsPage() {
    var page = document.getElementById('page-questions');


    hideAllPages();

    page.style.display = 'block';

    //window.alert('Je bent nu op de vragenpagina');

}


/**
 * functie die de check button behandeld
 */
function handleCheckButton() {
    var studentNummerInput = document.getElementById("studentnummer");
    console.log("De studentnummer is: " + studentNummerInput.value);
    checkStudent(studentNummerInput.value);
}

/**
 * Check student number using the API
 */
function checkStudent(number) {
    var xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function () {
        if (xHttp.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(xHttp.response);
            if (xHttp.status == 200) {
                studentIdentificationSucces(response);
            } else {
                studentIdentificationFailed(response);
            }
        }
    };
    xHttp.onerror = function () {
        studentIdentificationFailed(xHttp.statusText);
    };
    xHttp.open("GET", "https://quiz.clow.nl/v1/student/" + number, true);
    xHttp.send();
}

/**
 * Student is successfully identified
 */
function studentIdentificationSucces(student) {
    document.getElementById('Student').innerHTML = "Student:" + " " + student.number;

    console.info("ID OK: " + student.firstName + ' ' + student.lastName); // Een Javascript-object met studentnummer, voornaam en achternaam
    window.alert("Hallo" + ". " + student.firstName + " " + student.lastName + ". " + student.number + ".");
    showQuestionsPage();
    // Schrijf hier de code die uitgevoerd moet worden als het studentnummer klopt

}

/**
 * Student number is incorrect
 */
function studentIdentificationFailed(errorMessage) {
    console.error("ID ERROR : " + errorMessage);
    window.alert('Je hebt je studentennummer verkeerd ingetypt. Probeer het opnieuw.');
    var studentNummerInput = document.getElementById("studentnummer");
    studentNummerInput.value = '';
    // Schrijf hier de code die uitgevoerd moet worden als het studentnummer NIET klopt
}

/**F
 * laatste pagina
 */
function showlastpage() {
    var page = document.getElementById('page-last');


    hideAllPages();
    var textLastPage = document.getElementById('textlastpage');
    window.alert('Je bent klaar!');
    textLastPage.innerHTML = "Je hebt totaal" + " " + score + " " + "vragen goed beantwoord." + " " + "Je bent nu klaar met de Quiz!";
    page.style.display = 'block';
}
// Initialize
addButtonActions();
showStartPage();