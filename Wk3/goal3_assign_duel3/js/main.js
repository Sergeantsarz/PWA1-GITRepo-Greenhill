/*
     Name: Sarah Greenhill
     Date: 05/21/15
     Class & Section: PWA1
     Comments: Week 3 Homework Duel3 
 */
(function(){
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
		
	//This delcares the variable to access HTML and replace the H2 tag 
	var round_txt = document.querySelector("#round_number"); 
	
	//This delcares the variable to access the HTML for the fight button by accessing its ID 
	var button = document.getElementById("#fight_btn");	
	
	//This makes the event to watch for when the user clicks the round button
	button.addEventListener("click", fight, false);
	
	//Uses the DOM using .innerHTML method for the stuff at the top of the game page 
	round_txt.innerHTML = "Click The Fight Button to Start!";
	
	//This delcares the variables for the fighters and finds the HTML by using their #ID 
		var fighterOne_txt = document.querySelector("#kabal").querySelector("p");
		var fighterTwo_txt = document.querySelector("#kratos").querySelector("p");
	
	//This is the fight function, I stands for Initialize (as in initialize the function)
	function fight(){
		//Inside the fight function
		console.log("Fight Function Starts Here!");
					if(results === "No Winner!"){
					
		//This calls the Kabal object for its health and name 
		fighterOne_txt.innerHTML = Kabal[0].name + ": " + Kabal[0].health;
	
		//This calls the Kratos object for its health and name 
		fighterTwo_txt.innerHTML = Kratos[0].name + ": " + Kratos[0].health;
		}else{
		fighterOne_txt.innerHTML = results;
		fighterTwo_txt.innerHTML = "";
		
		//This disables the button so it stops being clickable
		button.removeEventListener("click", fight, false);
		
		//This uses querySelector to find the button
		document.querySelector(".buttonblue").innerHTML = "Finished!";
		
		}//End of else 
	};//End of the fight function
	
	//This function checks who the winner is 
	function winnerCheck(){
	console.log("Inside winnerCheck Function"); //This logs to the console that the winnerCheck function is currently happening 
		//Inside the winner check function
		var result = "No Winner!"; //Default state of 'result' variable is that ther is no winner
		//If either player's health has gone lower than 1, result variable will return that both players have died to the result variable, which will alert the user
		if(kabal[0].health < 1 && kratos[0].health < 1){
			
			result = "You Both Die.";
			
		}else if(kratos[0].health < 1){
			
			result = kratos[0].health + " Wins!"
			
		}else if(kratos[0].health < 1){
			
			result = kabal[0].health + " Wins!"
			
		}; //Ends the if-else for winnerCheck 
		
		return result; //Returns the results of the winner check
	}; //End of the winnerCheck Function
	
	//This calls the fight function into action - everything starts here 
	console.log("Program Starts Here!");
	fight();
})();
 
