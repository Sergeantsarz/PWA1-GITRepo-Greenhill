/*
     Name: Sarah R. Greenhill
     Date: April 4, 2015
     Class & Section:  PWA1 - Section 1
     Comments: "Week 1 - Homework - ANALYZE Duel #1"
 */
 
//self-excecuting function
(function(){
	console.log("Fight!");
	
	//Player Names
	var playerOneName = "Spiderman";
	var playerTwoName = "Batman";
	
	//Player Damage
	var player1Damage = 20;
	var player2Damage = 20;
	
	//Player Health
	var playerOneHealth = 100;
	var playerTwoHealth = 100;
	
	//What round we are in 
	var round = 0;
	
	//Fight Function - i for initialize
	function fight(){
		//fight code
		console.log("Fight Function Starts Here!");
		
		alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);
		
		for (var i=0; i<10; i++){
			//random formula is: Math.floor(Math.random() * (max - min) + min);
			var minDamage1 = player1Damage * .5;
			var minDamage2 = player2Damage * .5;
			
			var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);
			
			//Damage is inflicted
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
	
	//Winner Check Function
	function winnerCheck(){
	console.log("Inside winnerCheck Function");
		//winner code
		var result = "No Winner!";
		
		if(playerOneHealth < 1 && playerTwoHealth < 1){
			
			result = "You Both Die.";
			
		}else if(playerOneHealth < 1){
			
			result = playerTwoName + "Wins!"
			
		}else if(playerTwoHealth < 1){
			
			result = playerOneName + "Wins!"
			
		};
		
		return result;
	};
	
	//Fight Function Call - program begins here 
	console.log("Program Starts Here!");
	fight();
	
})();
 
