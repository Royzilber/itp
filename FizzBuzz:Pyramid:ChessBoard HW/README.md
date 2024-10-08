##Pseudo code
#FizzBuzz
i thought about this and came up with a pseudo code.
i need to make a variable that equals to 1. 
than i need my code to count up to 100 as a loop (i think)
than i will start to inciate a else if statments which follows 
if the number is divided by 3 than print Fizz 
if the number is divided by 5 print Buzz
and if its both of them than print FizzBuzz.
than if its none of the above print the variable in the loop thats growing by 1.
thats what i was thinking for the pesudo code .

#coding proccess 
i started by setting up my variable which is let = 1 
than i wrote if(let <=100 ; i ++); 
consloe.log (i)
and i tested it in the chrome console to see if my 1-100 code works right. 
well....it wasnt working
i didnt know whats wrong i stated the variable,  i read a bit on the internet and figured out i need to set a loop with all the paramters in it. like : for (initialization; condition; increment) {
so i typed for (let i=1 ; i<=100 ; i++){
    console.log(i);
}
WoW ! it worked.
so i figured out all i had to do is write if and else if statmens for the division which can be found on the classes github
first one - if ( i%3== 0)  im writing the summry if the code 
second one  -  ( i%5==0)
third one - if(i%3 ==0 && i%5==0)

i tried my code and it didnt work; it printed our only Fizz and Buzz 
i didnt understand why really not a clue. 
i turned out to chat gpt and asked whats wrong
#prompt
Whats wrong with my code? : 

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {                 
        console.log("Fizz");
    } else if (i % 5 === 0) {          
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {  
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}

and it told me : 

1.	Incorrect Output for FizzBuzz: The condition for "FizzBuzz" will never be reached for numbers that are divisible by both 3 and 5. This is because if i is divisible by 3, it will trigger the first condition and print "Fizz" without checking the subsequent conditions.
	2.	Example: For i = 15:
	•	It will first check 15 % 3 === 0, which is true, so it will print "Fizz".
	•	The check for "Buzz" and "FizzBuzz" will not happen because of the structure of the if-else statements.
    # i proceeded
    ok i see that it checks the 2 options first and if they are true than it executed fizz or buzz and it wont check the 3rd option.
    i swaped the order of the code and i got 

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {                 // Check for Fizz first
        console.log("Fizz");
    } else if (i % 5 === 0) {          // Then check for Buzz
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {  // Check for FizzBuzz last
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}

worked!

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




    



