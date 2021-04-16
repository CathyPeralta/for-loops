/*
Skriv ett program som skriver ut alla nummer från 1 till och med 20. 
Varje nummer ska skrivas ut i konsollen och även markeras om numret är ett jämnt nummer, alltså delbart med två. 
För att se om något är delbart med två, använd operatorn modulus.

Modulus är det som blir över vid division. Modulus operatorn är ett procenttecken "%"

*/

for(var i = 1; i <= 20; i = i + 1) {
    if (i % 2 === 0 ) {
    console.log( (i) + ". Jämnt")
    }
    else  {
    console.log((i) + ".");
}
}

