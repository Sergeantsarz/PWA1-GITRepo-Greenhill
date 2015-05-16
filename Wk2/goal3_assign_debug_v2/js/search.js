/*
     Name: Sarah Greenhill
     Date: 05/15/15
     Class & Section: PWA1
     Comments: Week 2 Homework Debug Search v2
 */

// Create privatized scope using a self-executing function
(function(){
	console.log("Inside initial function");
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = '';
	
	// Validates search query
	//There are two equal signs here when there should be one
	var validqte = function(query){
	console.log("3");
		// Trim whitespace from start and end of search query
		while(validqte.charAt(0) === " "){
			validqte = validqte.substring(1, validqte.length);
		}; 
		//beginning parenthesis is missing 
		while(validqte.charAt(validqte.length) === ""){
			validqte = validqte.substring(1, validqte.length-1);
		//No closing bracket for while loop here 
		};

	}; //Missing close bracket for validqte function
		
		// Check search length, must have 3 characters
		//If the query to the search engine is less than 3, it will alert the user that what they entered is too short and to try again with a longer entry
		if(validqte.length < 3){
		console.log("4");
		//missing end quotes, added them in 
		//alert the user that their search was not enough characters 
			alert("Your search query is too small, try again.");
			 
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			//return the results of the search 
			return;
		};
		console.log("5");
		//if the length of the query is sufficient, then search for the term entered by the user 
		search(query);
	
	
		// Finds matches when the user searches for something
		var search = function(query){
		console.log("6");
		// split the user's search query string into an array
		var queryArray = search.join(" ");
		
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){
		console.log("7");
			// each db[i] is a single video item, each title ends with a pipe "|"
			var dbTitleEnd = db[i].indexOf('|');
			// save a lowercase variable of the video title by switching anything the user enters and sending it to all lower case
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);
			
			// loop through the user's search query words
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
			// save a lowercase variable of the search keyword
				var qitem = queryArray[ii].tolowercase();
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				//The results array will now contain anything that querys a result based upon what the user has entered into the search 
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){
					results.push(db[i]);
				}; //Missing end curly brace for search function
			}; //Missing end curly brace for db array loop
		}; //Missing end curly brace for db for loop
		
		results.sort();
		
		// Check that matches were found, and run output functions
		//if the results =  0 then let the user know there was no match by initalizing the noMatch function, else show the user what matched their query and output those matches to the results variable 
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	//noMatch function is defined here. If no matches are found in the database, display these HTML properties to the user
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		//validate is spelled incorrectly 
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	}; //Missing end curly brace for document.forms function

})();