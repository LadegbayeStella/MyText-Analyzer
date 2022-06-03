// Utility logic
function errorCheck(sentence) {
  return (sentence.trim().length === 0);
}

function errorCheck2(word, passage) {
  return ((passage.trim().length === 0) || (word.trim().length === 0));
}


function filterSentence2(sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
  return sentence;
}

// Business Logic


function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}


function maskOffensiveWord(passage) {
  passage = passage.toLowerCase();
  let offensiveArray = ["biffaroni", "loopdaloop", "zoinks", "muppeteer"];
  let retArray = [];
  let textArray = passage.split(" ");
  textArray.forEach(function (element) {
    offensiveArray.forEach(function (oElement) {
      if (element === oElement) {
        element = "*****";
      }
    })
    retArray.push(element);
  });
  return retArray.join(' ');
}

function wordMatch(wordOne, wordTwo) {
  wordOne = filterSentence2(wordOne)
  wordTwo = filterSentence2(wordTwo)
  return wordTwo.toLowerCase().includes(wordOne.toLowerCase()) && wordOne.toLowerCase() === wordTwo.toLowerCase();
}

function boldPassage(word, text) {
  if (errorCheck2(word, text)) {
    return "";
  }
  word = word.toLowerCase();
  text = text.toLowerCase();
  let offensiveArray = ["biffaroni", "loopdaloop", "zoinks", "muppeteer"];
  let htmlString = "<p>";
  text = filterSentence2(text);
  text = maskOffensiveWord(text);
  let textArray = text.split(" ");
  textArray.forEach(function (element, index) {
    if (wordMatch(element, word)) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    }
    else if (element.includes(word) && element !== word) {
      newElement = element.replace(word, "<b>" + word + "</b>");
      htmlString = htmlString.concat(newElement);
    }
    else {
      htmlString = htmlString.concat(element);
    }
    offensiveArray.forEach(function (off) {
      if (index !== (textArray.length - 1 && textArray.length - 1 !== off)) {
        htmlString = htmlString.concat(" ");
      }
    });
  });
  return htmlString + "</p>";
}

function numberOfOccurrencesInText(word, text) {
  if (errorCheck2(word, text)) {
    return 0;
  }
  let textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (wordMatch(element, word)) {
      wordCount++;
    }
  });
  return wordCount;
}

function topThreeWords(text) {
  if (errorCheck(text)) {
    return 0;
  }
  text = filterSentence2(text);
  let textArray = text.split(" ");
  let maxWord = ""
  let maxCount = 0;
  let result = "";
  textArray.forEach(function (element) {
    let wordCount = numberOfOccurrencesInText(element, text);           
    if (wordCount > maxCount) {
      maxCount = wordCount;
      maxWord = element;
    }                                                          
    result = maxWord + " " + maxCount;
  });
  return result;
}




// User Interface Logic
$(document).ready(function () {
  $("#word-counter").submit(function (event) {
    event.preventDefault();
    let sentence1 = $("#text-passage").val();
    let word = $("#word").val();
    let boldedPassage = boldPassage(word, sentence1);
    let maskedBoldPassage = maskOffensiveWord(boldedPassage)
    $("#bolded-passage").html(maskedBoldPassage);
    let topmostWord = topThreeWords(sentence1);
    let topmostWord1 = topmostWord.replace(/\s|[0-9]/g, "");
    topmostWord1 = topmostWord1.trim();
    let regexd = new RegExp(topmostWord1 ,"gi");
    let sentence2 = sentence1.replace(regexd, "");
    let secondWord = topThreeWords(sentence2);
    let secondWord1 = secondWord.replace(/\s|[0-9]/g, "");
    secondWord1 = secondWord1.trim();
    let regexd2 = new RegExp(secondWord1 ,"gi");
    let sentence3 = sentence2.replace(regexd2, "");
    let thirdWord = topThreeWords(sentence3);
    $("#top").html("<br>"+"<li>"+topmostWord + "</li>" + "<br>"+"<li>" + secondWord +  "</li>"  + "<br>"+ "<li>" + thirdWord +  "</li>" );
    $("#total-count").text(wordCounter(sentence1));
    $("#selected-count").text(numberOfOccurrencesInText(word,sentence1));
   
  });
});