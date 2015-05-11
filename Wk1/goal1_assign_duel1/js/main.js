/*
     Name: Sarah Greenhill
     Date: 05/09/15
     Class & Section: PWA1
     Comments: Week 1 Homework 1 Duel 
 */
 
//This is a self-excecuting function
(function(){
	console.log("Fight!");
	
	//These are the player's names
	var playerOneName = "Spiderman";
	var playerTwoName = "Batman";
	
	//Damage done by each player
	var player1Damage = 20;
	var player2Damage = 20;
	
	//Each player's health
	var playerOneHealth = 100;
	var playerTwoHealth = 100;
	
	//This variable shows what round we're in
	var round = 0;
	
	//This is the fight function, I stands for Initialize (as in initialize the function)
	function fight(){
		//Inside the fight function
		console.log("Fight Function Starts Here!");
		//This displays an alert to the user showing the player's names, current health, and that the round has started
		alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);
		
		for (var i=0; i<10; i++){
			//Formula for random generated number: Math.floor(Math.random() * (max - min) + min); These are variables set up to contain the math done to determine the random amount of damage that each player does
			var minDamage1 = player1Damage * .5; //This is the minimum amount of damage player 1 dishes out
			var minDamage2 = player2Damage * .5; //This is the minimum amount of damage player 2 dishes out 
			
			var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1); //Random math formula calculating dmg for player 1 
			var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2); //Random math formula calculating dmg for player 2
			
			//This is where damage is done by each player
			playerOneHealth -= f1;
			playerTwoHealth -= f2;
			//This logs to the console the current health of each player
			console.log(playerOneName+":"+playerOneHealth+playerTwoName+":"+playerTwoHealth);
			
			var results = winnerCheck(); //This calls the winnerCheck function where it will check to see if a player has bested the other, or if both have died 
			console.log(results); //Logs the variable 'results' to the console showing who's been killed and/or what their health is 
			
			//This if-else states that if there's no winner, move on to the next round, add 1 to the round total, then alert the user of the player's current health totals and round number. If someone has won, alert the user who won or if both players have died 
			if(results === "No Winner!"){
				
				round++;
				alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);
			}else{
				alert(results);
				break;
			};
		};
		
	};
	
	//This function checks who the winner is 
	function winnerCheck(){
	console.log("Inside winnerCheck Function"); //This logs to the console that the winnerCheck function is currently happening 
		//Inside the winner check function
		var result = "No Winner!"; //Default state of 'result' variable is that ther is no winner
		//If either player's health has gone lower than 1, result variable will return that both players have died to the result variable, which will alert the user
		if(playerOneHealth < 1 && playerTwoHealth < 1){
			
			result = "You Both Die.";
			
		}else if(playerOneHealth < 1){
			
			result = playerTwoName + " Wins!"
			
		}else if(playerTwoHealth < 1){
			
			result = playerOneName + " Wins!"
			
		};
		
		return result;
	};
	
	//This calls the fight function into action - everything starts here 
	console.log("Program Starts Here!");
	fight();
	
})();
 
