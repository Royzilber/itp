# The concept
I wanted to create a good solution for a game we play with friends called : Notes. 
the rules of the game is that we write words on a paper, preferably a lot of words 
and we split into 2 teams and every member picks a piece of paper with a word and tries to communicate 
the word to the other team members through pantomime. 
if the team member guess the word than the team gets 1 point. 
every member can skip a word if he likes to. 
every pantomime member has 1 minute to do as many words as he can. 

## What i tried to solve 
i wanted it to make it esier for everyone to play the game, instead of writing the words on a piece of paper i wanted to create a software that generates random words from an array. making it an esier interface and maybe save some trees in the proccess. 
my goal was to create a random word generator that can produce a random word from an array with the option of skipping a word, and when taking words out if they are used. 
i wanted to make a Game Over mode when all of the words were used, than the software presents a Game Over prompt than idicates that all of the words were used and the game is over. 

## pseudo code 

so i needed to create a const of words where i can put all of the words that we want to use. 
i needed a variable that contains all of the words and puts them in an array. 
than i wanted to create a skip button that can skip a word, which is basically works the same way as the Generate button. 
i needed the code to pick a random word from the array i gave it, and not just giving it on the same order that they are appear in the array. 
finally i wanted the code to erase the word that was presented from the array. 
lets say the array has 10 words, than if i press Generate word, i get 10-1 words which is 9. 
when the array hits 0 than a prompt is presented saying game over. 
i want to add a timer to it, since it's a time based game. 
for the design,  i chose a simple design, blue and white with a big buttons. 

## how it works

I made the HTML file because i wanted it to work on a broweser for easy use. 

i put all of the information that i wanted in the HTML and CSS file, 2 buttons, the little box that contains the info and the background. 
styled it a bit with Hover Function that changes the color of the button when you move your cursor around it.  

### Java Script  

i set up a variable that is called words -  this is and array that we put our words inside. 

 const words = []; i put the words inside

i connnected the HTML code to JavaScript code for the buttons using the following: 

 const generateButton = document.getElementById("generateButton");

 next step is to add the GameOver function. 
 i did it with if statement that says, if the the array length is 0 meaning it has 0 words left because of deduct 1 every time its used than the prompt says GameOver 

 ## Timer 
ii wanted to make a timer in the game that counts off 1 minute. 
 i tried to use the article of the timer but couldnt make it work, when i pressed generate word it would stay on 1:00 so i asked chatGPT to add a timer into my code that starts when i press generate word and dosent work when i press skip word, and it worked. 

 # webstie 
 Finally i uploaded to the web, i made an index.html file and put it on my webstie repasotory and it works!

 ## Problems i faced 

 i could manage the word array, but i couldnt figure out how to dedact a word when it's used, i called my friend who is a software engenier and he guided me through the process and added the const randomWord = words.splice(randomIndex, 1)[0];
  which the Splice function get the word out if its used making the array smaller. 
  i couldnt get the timer working, so i asked chatGPT to add the timer into my code. 
   had some back and fourth about the styling with CSS, choosing colors and shapes. 

   # what i can add to it

   ## categories 

   i can add categories like "animals" "Objects" "celebrities" 
   i can do it by making couple of arrays besides words, and make different buttons when if pressed than the words are beign chosen from the specific array that the player decide. 

   ## Dictionary 

   i can make it way esier and make my program use a dictionary instead of manually putting in the words. 

   ## styling 

   i can style it better and make it look more cool. 

 # sources  

  [Timer][https://www.w3schools.com/js/js_timing.asp] 

 [Random Word Generator] [https://www.instructables.com/Create-a-Fun-Random-Word-Generator-With-HTML-and-J/]

 [buttons with html and css] [https://www.shecodes.io/athena/118358-how-to-create-a-button-in-html-and-css]

 https://zguyun.com/blog/how-to-combine-html-css-and-javascript-in-one-file/ 

 ChatGPT


















