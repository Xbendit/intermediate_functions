// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.
/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

/*---------------CODE-----------------*/

const emailinput = 't.mellink@novi.nl'

function getEmailDomain(string) {
    const indexaapje = string.indexOf('@');
    const lastindex = string.length;
    return string.substring(indexaapje +1, lastindex);
}

const antwoord = getEmailDomain(emailinput);
console.log(antwoord)

/*---------------CODE----------------*/

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

/*----------------CODE----------------*/

/*const email = "n.eeken@novi-education.nl"

function typeOfEmail(email) {
    const indexaapje = email.indexOf('@');
    const lastindex = email.length;
    /!*return email.substring(indexaapje +1, lastindex);*!/
    const domain = email.substring(indexaapje + 1, lastindex);
    switch (domain) {
        case 'novi-education.nl':
            output = 'Student';
            break;
        case 'novi.nl':
            output = 'Medewerker';
            break;
        default:
            output = 'Extern';
            break;
    }
    return output
}
const print = typeOfEmail(email)
console.log(print)*/

/*------------------CODE---------------*/

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

/*--------------CODE--------------*/

/*const email = 'n.eeken@novi.nl';

function checkEmailValidity(email) {

    let indexaapje = email.includes('@');
    let komma = email.includes(',');
    let lastindex = email.length;

    if (indexaapje === true && komma === false && email[lastindex - 1] !== '.') {
        output = 'True'
    } else {
        output = 'False'
    }
    return output;
}

const answer = checkEmailValidity(email);
console.log(answer)*/

/*----------CODE-----------*/
