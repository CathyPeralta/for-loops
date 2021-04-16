/*
Använd din kod från uppgift 3.

Låt nu användaren skriva in 3 nummer istället.

Programmet ska
- Räkna från input 1
- Till input 2
- Med input 3 som ökning
*/


let user = Number(prompt("Enter a start number betewen 0-10") )
let user1 = Number(prompt("Enter a end betewen 0-10") )
let user2 = Number(prompt("Enter a increasing betewen 0-10") )

for(var i = user; i <= user1; i = i + user2)
{
 console.log((i) + ". ");
}