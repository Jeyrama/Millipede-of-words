/*
The set of words is given. 
Words are joined if the last letter of one word 
and the first letter of another word are the same. 

Return true if all words of the set can be combined into one word. 
Each word can and must be used only once. 
Otherwise return false.

Input:
  Array of 3 to 7 words of random length. 
  No capital letters.

Example:
  Set: excavate, endure, desire, screen, theater, excess, night.
  Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.
  returns true.

Example:
  Set: trade, pole, view, grave, ladder, mushroom, president.
  Millipede: presidenT Trade.
  returns false.
*/


// Solution