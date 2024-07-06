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

function solution(words, current = '') {
  if (words.length === 0) {
    return true;
  }
  for (let i = 0; i < words.length; i++) {
    if (current.length === 0 || current[current.length - 1] === words[i][0]) {
      if (solution(words.slice(0,i).concat(words.slice(i+1)), current + words[i])) {
        return true;
      }
    }
  }
  return false;
}

// or

class Word {
  wordId;
  firstChar;
  lastChar;

  constructor(wordId, firstChar, lastChar) {
    this.wordId = wordId;
    this.firstChar = firstChar;
    this.lastChar = lastChar;
  }
}

function solution(wordsArray) {
  const words = [];
  const idsArray = [];

  wordsArray.forEach((word, index) => {
    words.push(new Word(index, word[0], word[word.length - 1]));
    idsArray.push(index);
  });

  let result = false;
  let queue = [];
  words.forEach(word => queue.push([word.wordId]));

  while (queue.length > 0) {
    const currentArray = queue.shift();
    const lastWord = words[currentArray[currentArray.length - 1]];

    if (currentArray.length === words.length) {
      result = true;
      break;
    }

    let wordIdsLeft = idsArray.filter(id => !currentArray.includes(id) && lastWord.lastChar === words[id].firstChar);

    wordIdsLeft.forEach(id => {
      queue.unshift([...currentArray, id]);
    })
  }

  return result;
}