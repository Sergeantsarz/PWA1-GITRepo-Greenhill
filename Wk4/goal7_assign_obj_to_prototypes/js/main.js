/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Sarah R. Greenhill
 */


make an array called var names that contains 5 people = [person1, person2, person3, person4, person5];

use a for loop to create three objects in an array(param1, param2, param3){
create an array called  var people with three objects inside = [

create var personObject1 = {personJob1: info};
create var personObject2 = {personJob2: info};
create var personObject3 = {personJob3: info};

];
};

create a randomly selected row and name from the name array in the HTML var nameRow = Math.floor(Math.random());

create a function called populateHTML that returns the selected random persons name and job (name, job){
	
	console.log(personName + personJob);
};

create a interval that does a runUpdate(); function 30 times every second

after people array is populated, loop through the people until all people are gone through and  excecute the update(); function 

end program by outputing the persons name and job with HTML in the web page 



/*-----------

    Create an array called names that contains at least 5 people names that will be randomly selected in the output display.
    Create three instances of the Person object using a FOR loop and place each reference of the object in an array called people.
        When instantiating the Person object, make sure a randomly chosen name (using the Math.random() method) from the names array is sent to the constructor of the person along with what row number in the HTML the information will be displayed in.
            Ex: var person = new Person(names[someName],someRow);
        Create a function called "populateHTML" which outputs the person's name and person's job, on the web page.
        The code must be built to NOT allow duplicate names to appear.
    Set up an Interval that calls a runUpdate() function 30 times a second.
        Example: "setInterval(runUpdate, 1000 / 30);"
    Once all the Person instances are in the people array, the program will loop through each person and run the prototype update() function. The loop should execute in the runUpdate() function that is called from the setInterval (in the example directly above). For example:
        function runUpdate(){
                people.forEach(function(element){ 
                element.update(); 
        });
-----------*/
