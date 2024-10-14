// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?

/*Met een If loop kijken of de waarde groter is dan 8*/

// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?

/*werk met length in je for loop*/

// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?

/*Maak een constante met let aan en tel daar bij elke lus 1 op, presenteer dit in de log*/

// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

/*--------------------CODE--------------------------*/

/*const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];*/

/*function cumLaude(cijfers) {
    let count = 0;

    for (let i = 0; i < cijfers.length; i++) {
        if (cijfers[i] >= 8) {
            count++;
        }
    }
    return count;
}

const counter = cumLaude(grades);
console.log(counter);*/
/*--------------------------------------------------*/

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?

/*Tel alle cijfers bij elkaar op en deel door het aantal cijfers*/

// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?

/*1. de optel som van alle cijfers uit een array
2. het aantal cijfers in de array*/

// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?

/*Met een for lus en een length statement van de array.*/

// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

/*
/!*-------------------CODE------------------*!/
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

function averageGrade(cijfers) {
    let count=0;
    let sum=0;

    for (let i = 0; i < cijfers.length; i++) {
        count++;
        sum += cijfers[i];
    }
    average = (sum/count);
    return average;
}

const counter = averageGrade(grades).toFixed(2)
console.log(counter)

/!*-------------------------------------*!/
*/

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

/*Zie code 2b voor oplossing.*/

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?

/*Met een for lus die het hele arry checked met behulp van length*/

// * Op welke conditie moet ik checken?

/*Hij moet steeds kijken of het cijfer niet hoger is dan het vorige cijfer*/

// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?

/*Door hem op te slaan in een constante */

// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

/*-------------------CODE------------------*/
const grades = [8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

function highestgrade(cijfers) {
    let bestgrade = cijfers[0];
    for (let i = 0; i < cijfers.length; i++) {
        if (bestgrade <= cijfers[i+1]) {
            bestgrade = cijfers[i+1];
        }
    }
    return bestgrade;
}

const uitkomst = highestgrade([8, 9, 4, 6, 10]);
console.log(uitkomst);
/*-------------------------------------*/


// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
