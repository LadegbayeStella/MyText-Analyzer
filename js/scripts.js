// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

function punctuation(sentence) {
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

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}
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


function OffensiveWord1(passage) {
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

function topThreeWords(text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  text = punctuation(text);
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
word = word.toLowerCase();
text = text.toLowerCase();
let offensiveArray = ["biffaroni", "loopdaloop", "zoinks", "muppeteer"];
let htmlString = "<p>";
text = punctuation(text);
text = OffensiveWord1(text);
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

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});
