##Pyramid Pseudo code
i wanted the user to choose a number and i used the prompt command 
i set the variable number and the user have to choose between 1-8
i want the code to limit the user between only numbers between 1-8 
if its less than 1 and more thhan 8 or if its not a number at all i want to notify the user.
if its not between 1-8 end the program and tell this to the user. 
if it is than proceed with the code. 
i needed to create a variable that can talk to the number and create the pyramid. 
for creating the pyramid i wanted to do the number for instense 8 and if its 8 than create 7 "spaces" than a "#" and so on 
## code
i started with the prompt 

let number = parseInt(prompt("Enter a number between 1 - 8 :")); 

to ask the user to choose a number

than i wanted to iliminate any other option of numbers or words so i wrote 

if the input number is less than 1 or greater than 8 or its not a number at all than write the following

if (number < 1 || number > 8 || isNaN(number)) {
    console.log ("it's not between 1-8") 

than i had to set a variable that tells when to intiate spaces in a loop so i wrote 

for (let i = 1; i <= number; i++) 

code for the empty space 

let none = " ".repeat(number - i);

it calculates the spaces 

let hashes = "#".repeat(i);

it calculates the hasesh

than the console should present the sum of the spaces and hushes 

console.log(none + hashes); 

the console should calculate 




    

