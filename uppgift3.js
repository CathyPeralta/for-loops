/*
Skriv ett program som tar ett nummer från användaren. Gör en loop som räknar från 0 till användarens input i konsollen.
Se till så att input är ett nummer.
*/


let user = Number(prompt("Enter a number betwwen 0-10") )

for(var i = 0; i <= user; i = i + 1)
{
 console.log((i) + ". ");
}