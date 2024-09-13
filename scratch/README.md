# The Doughnut race Project
## Roy Zilbersher
-so i started by opening Scratch and tried to understand how it functions.
-i then proceeded to watch some Youtube videos explaining the basic functions i can and some tutorials.
-i started thinking about what i want to do with the information that i got from the Youtube, i didnt want to use your scratch example, i wanted to build everything by myself.
- what i came up with is a multiplayer game that can be played on one computer with one keyboard, the purpose is to catch the food and everytime you catch it you gain 1 point.
-i started out by making my dog charachter move when i press ASDW keys, so i needed to decide how far it moves when i ress each key, i thought i needed to make a command for each key, when i press it, the picture will move by X pixels when the game starts, and it will be doing this for the entire duration of the game until its paused.
i found some commands for that and build a block.
- i chose another sprite which was a fox in the begining but i changed it to bat for reasons i will explain later.
- i copied my blocks from the dog the other sprite and change the keys to arrows.
- i proceeded than to make my food, i chose another sprite.
- than i thought it will be wierd if it dosent do anything when a player catch. so i thought it might move to a different location and theyll have to catch it all over again.
i found a way to tell the food that if a player toch it, it will move to a random position, which is exactly what i wanted. i made a block which said that if the game starts and one player catch it it will move, for the entire duration of the game until it stops. i did it for my dog and than for my bat.
-i needed some kind of scoring system and adter online research i found that i can make something called variable which keeps track of the score. i made one for my bat and one for the dog.
that added a command that says if the dog touch the food the variable changes by 1. i did the same thing for the bat.
- i tried to play the game and noticed that the score wont change when i start the game i guess because its under the forever loop. so added a command before the loop that says when you start the game the variable changes to 0 for dog and for the bat.
- i wanted some kind of sound to indicate the player that he gained a point, and i found a nice sound that replicates a bite and i added it to each of the touching blocks, and that made a sound, very satisfying.
- i saw that there are different position of the sprites that i could choose, so i thought id make some kind of animation of them walking when i press a key. i found a tutorial which explained how to change customs, and i did it, but it made it change customs repeatedly when the game starts and it seemed like they walking even if theyre just standing in place. i thought for some time and found a solution, i added the next custom block under the keys block, and it worked! i was proud of myself.
but the walking was too fast for me, so i added a wait block under the next custom and changed it to 0.02 seconds which seemed to tame it down a bit.
- i did the same thing for the my fox, but discoverd that it only had one custom which was sitting, and its not what i want, so i changed it to the bat which has 4 customs of flying, and i did the same proccess for the bat, i had to keep it as Fox to not screw up my variable.
- next i did some nice background to make it look a bit nicer, and i saw that there is a code there so i wanted to make some sound when you start the game, that i made a block that sais when the game starts play a cheering sound, it was nice. 
-that's it i think, i had fun doing this, and i night improve and add things to it later when i have some time, maybe my own music :)
thank you.
