
function countCharacter(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count;
};

function capitalizeFirstCharacterOfWords(string) {
  let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      	arr[i] = word[0].toUpperCase() + word.substring(1);
      }

  return arr.join(" ");
};


function reverseWord(word) {
  return word.split("").reverse().join("");
}; // 명령어는 앞에서부터 적용된다.

function reverseAllWords(sentence) {
  let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);  //분리한 각 단어들을 reverse함수를 이용하여 뒤바꾼후 다시 words의 같은 index에 돌려준다

    }
   return words.join(" ");
};


function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};


function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

function encode(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
};


function palindrome(str) {
  return `${str} ${reverseWord(str)}`;
};

function pigLatin(sentence, character) {
  return sentence.split(' ').join(character + ' ');
};

export {countCharacter as count, capitalizeFirstCharacterOfWords as capital, reverseWord as reverse, reverseAllWords as reverseAll, replaceFirstOccurence as replaceFirst, replaceAllOccurrences as replaceAll, encode, palindrome, pigLatin}




import {count, capital, reverse, reverseAll,  replaceFirst, replaceAll, encode, palindrome, pigLatin}  from './messageMixer.js';

function displayMessage() {
  console.log(count("What is the color of the sky?", "t"));
  console.log(capital("What is the color of the sky?"));
  console.log(reverse("What is the color of the sky?"));
  console.log(reverseAll("What is the color of the sky?"));
  console.log(replaceFirst("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
  console.log(palindrome("Yes you are!"));
  console.log(pigLatin("Yes you are!", '!'));
}

displayMessage()
