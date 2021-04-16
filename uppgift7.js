/*
Skriv ett program som läser in ett nummer från användaren. 
Addera sedan alla nummer från 1 till och med det nummer som användaren skriver in och skriv ut den totala summan i konsollen.

Tänk på att det är ett nummer vi vill skicka in.
*/

let user = Number(prompt("Enter a number") )
   let sum = 0

for(var i = 1; i <= user; i = i + 1) {
    sum = i + sum
    console.log(sum)
}
console.log (sum)
