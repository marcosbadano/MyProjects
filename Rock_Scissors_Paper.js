//This code is the work of Nise with the help of Freddy Vega and the Platzi student community

let random = Math.floor(Math.random() * (3 - 1 + 1) + 1) //Generate a random number between 1 and 3
let pc = random. toString(); //Convert the random integer value to a string, so we can work with the variables corresponding to the player and the pc in the same block of code
let player = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera") //Ask the player what move he wants to make and save his answer in the player variable

//PLAY

function select(play) { //Modularization of the code
	let result = "" //Result is for the moment, an empty string
	switch(play) { //Being 'play' equal to player or pc variables
		case "1": //if play = 1...
			result = " Rock 🪨"
		break;
		case "2": //if play = 2...
			result = " Paper 🧻"
		break;
		case "3": //if play = 3...
			result = " Scissors ✂️"
		break;
		default: //if play = something else...
			result = " If you don't choose rock, paper, scissors you will lose 😞" 
	
	}
	return result //select return result variable
}

alert("You chose:" + select(player)) //The program show the player election
alert("PC chose:" + select(pc)) //The program show the PC eletion

//COMBAT!

if(pc == player) {
    document.write('<span class="draw">' + '<center>' + '<strong>' + "Draw 🤝" + '</strong>' + '</center>' + '</span>')
} else if(player == "1" && pc == 3) {
    document.write('<span class="win">' + '<center>' + '<strong>' + "You win! 🥳" + '</strong>' + '</center>' + '</span>')
} else if(player == "2" && pc == 1) {
    document.write('<span class="win">' + '<center>' + '<strong>' + "You win! 🥳" + '</strong>' + '</center>'  + '</span>')
} else if(player == "3" && pc == 2) {
    document.write('<span class="win">' + '<center>' + '<strong>' + "You win! 🥳" + '</strong>' + '</center>' + '</span>')
} else {
    document.write('<span class="lose">' + '<center>' + '<strong>' + "You lose 😢" + '</strong>' + '</center>' + '</span>')
}

//And that's the Rock, Paper, Scissors algorithm! ⬆️