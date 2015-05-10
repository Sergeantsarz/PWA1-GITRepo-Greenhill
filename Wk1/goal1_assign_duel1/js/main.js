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
		
		alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);
		
		for (var i=0; i<10; i++){
			//Formula for random generated number: Math.floor(Math.random() * (max - min) + min);
			var minDamage1 = player1Damage * .5;
			var minDamage2 = player2Damage * .5;
			
			var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);
			
			//This is where damage is done by each player
			playerOneHealth -= f1;
			playerTwoHealth -= f2;
			
			console.log(playerOneName+":"+playerOneHealth+playerTwoName+":"+playerTwoHealth);
			
			var results = winnerCheck();
			console.log(results);
			
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
	console.log("Inside winnerCheck Function");
		//Inside the winner check function
		var result = "No Winner!";
		
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
 
