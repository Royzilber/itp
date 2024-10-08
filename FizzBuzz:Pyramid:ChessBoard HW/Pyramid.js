let number = parseInt(prompt("Enter a number between 1 - 8 :"));

if (number < 1 || number > 8 || isNaN(number)) {
    console.log("It's not between 1 and 8.");
} else {
   for (let i = 1; i <= number; i++) { 
       let none = " ".repeat(number - i);  
       let hashes = "#".repeat(i);         
       console.log(none + hashes);         
   }
}