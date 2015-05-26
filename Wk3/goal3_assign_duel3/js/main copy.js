/*
     Name: Sarah Greenhill
     Date: 05/21/15
     Class & Section: PWA1
     Comments: Week 3 Homework Duel3 
 */
 
 	//This prints fight to the console
	console.log("Fight!");
	
	//These are the fighter variables 
	var Kabal = {
	
		name: "Kabal",
		damage: 20,
		health: 100,
		
	};
	
	var Kratos = {
	
		name: "Kratos",
		damage: 20,
		health: 100,
		
	};
	//This variable shows what round we're in
	var round = 0;
	
	//This is where each piece of the DOM is defined 
	//This delcares the variables for the fighters and finds the HTML by using their #ID 
		var fighterOne_txt = document.querySelector("#kabal").querySelector("p");
		var fighterTwo_txt = document.querySelector("#kratos").querySelector("p");
		
	//This delcares the variable to access HTML and replace the H2 tag 
	var round_txt = document.querySelector("h2"); 
	
	//This delcares the variable to access the HTML for the fight button by accessing its ID 
	var button = document.getElementById("fight_btn");	
	
	//This makes the event to watch for when the user clicks the round button
	button.addEventListener("click", fight, false);
	
	//Uses the DOM using .innerHTML method for the stuff at the top of the game page 
	round_txt.innerHTML = "Click The Fight Button to Start!";
	
	//This calls the Spiderman object for its health and name 
	fighterOne_txt.innerHTML = spiderman[0].name + ": " + spiderman[0].health;
	
	//This is the fight function, I stands for Initialize (as in initialize the function)
	function fight(){
		//Inside the fight function
		console.log("Fight Function Starts Here!");
		//This displays an alert to the user showing the player's names, current health, and that the round has started
		alert(playerOneArr[0] + ": " + playerOneArr[2] + " *START* " + playerTwoArr[0] + ": " + playerTwoArr[2]);
		
		for (var i=0; i<10; i++){
			//Formula for random generated number: Math.floor(Math.random() * (max - min) + min); These are variables set up to contain the math done to determine the random amount of damage that each player does
			var minDamage1 = playerOneArr[1] * .5; //This is the minimum amount of damage player 1 dishes out
			var minDamage2 = playerTwoArr[1] * .5; //This is the minimum amount of damage player 2 dishes out 
			
			var f1 = Math.floor(Math.random() * (playerOneArr[1] - minDamage1) + minDamage1); //Random math formula calculating dmg for player 1 
			var f2 = Math.floor(Math.random() * (playerTwoArr[1] - minDamage2) + minDamage2); //Random math formula calculating dmg for player 2
			
			//This is where damage is done by each player
			playerOneArr[2] -= f1;
			playerTwoArr[2] -= f2;
			//This logs to the console the current health of each player
			console.log(playerOneArr[0] + ": " + playerOneArr[2] + playerTwoArr[0] + ": " + playerTwoArr[2]);
			
			var results = winnerCheck(); //This calls the winnerCheck function where it will check to see if a player has bested the other, or if both have died 
			console.log(results); //Logs the variable 'results' to the console showing who's been killed and/or what their health is 
			
			//This if-else states that if there's no winner, move on to the next round, add 1 to the round total, then alert the user of the player's current health totals and round number. If someone has won, alert the user who won or if both players have died 
			if(results === "No Winner!"){
				
				round++;
				alert(playerOneArr[0] + ": " + playerOneArr[2] + " *ROUND " + round + " OVER* " + playerTwoArr[0] + ": " + playerTwoArr[2]);
			}else{
				alert(results);
				break;
			}; //End of the for loop
		}; //End of the if-else statement
		
	}; //End of the fight function
	
	//This function checks who the winner is 
	function winnerCheck(){
	console.log("Inside winnerCheck Function"); //This logs to the console that the winnerCheck function is currently happening 
		//Inside the winner check function
		var result = "No Winner!"; //Default state of 'result' variable is that ther is no winner
		//If either player's health has gone lower than 1, result variable will return that both players have died to the result variable, which will alert the user
		if(playerOneArr[2] < 1 && playerTwoArr[2] < 1){
			
			result = "You Both Die.";
			
		}else if(playerOneArr[2] < 1){
			
			result = playerTwoArr[0] + " Wins!"
			
		}else if(playerTwoArr[2] < 1){
			
			result = playerOneArr[0] + " Wins!"
			
		}; //Ends the if-else for winnerCheck 
		
		return result; //Returns the results of the winner check
	}; //End of the winnerCheck Function
	
	//This calls the fight function into action - everything starts here 
	console.log("Program Starts Here!");
	fight();
	
})();
 
