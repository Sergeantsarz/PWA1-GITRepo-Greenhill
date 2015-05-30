/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Sarah R. Greenhill
 */


create a global object that person.js can access and use in its code 

create variable var jobs Person.array = [job1, job2, job3]; that is used with the person object

create variable var Person.actions = [verb1, verb2, verb3]; that is used with the person object

create person constructor = {
	
	name: this is the name of the person
	action: this is what the person is doing 
	job: this is the persons job
	row: this is the row referenced in the main.js file
	function: create a method for person object so that the function will update as a prototype for the main.js file to use and output the persons name and job to the HTML in the web page and make sure that it does it every 5 seconds and references the correct column (3)
};















/*------------


    Add the Person object to the global window object - because main.js needs it. Example: "window.Person=Person;"
    Two variables, "jobs" and "actions" which should be directly on the Person object (static variables). The jobs variable is an array of 4 or more jobs. The actions variable is also an array of some actions a person could do.
        ex: Person.jobs = ["teacher","farmer","student","pilot"];
        ex: Person.actions = ["sleeping","eating","working"];
    The Person constructor should also have four properties:
        name: The name of the person. This property is set in this constructor for the Person.
        action: This property is set in this constructor for the Person. This property states what the person is actively doing and it is one of the values in the actions array. You will randomly select one item from the Person.action array for this property (use the Math.random() method).
        job: This property is set in this constructor for the Person and is one of the values in the jobs array. You will randomly select one item from the Person.jobs array for this property(use the Math.random() method).
        row: Like the name property, this is set in this constructor.
        Main.js writes out the information for the person's name and job. You will now need to display the initial action of the person in 3rd column.
    The Person object must have an update() function added to its prototype. The purpose of this update() function, which is called from the main.js file, is to change the action of the person every so often, this is based on the interval instructions given above (approx. once every 5 seconds or so) and display that change in the HTML in column 3.


--------------*/