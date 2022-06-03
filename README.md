Describe: wordCounter()

Test:"It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output:1

Test:"It should return 2 if a passage has two words."
Code:
const text ="hello there";
wordCounter(text);
Expected Output: 2;

Test:"It should return 0 for an empty string";
code:wordCounter("");
Expected Output : 0;

Test:"It should return 0 for a string that is only spaces."
code:wordCounter("          ");
Expected Output : 0;

Test:"It should not count numbers as words."
code:wordCounter("hi there 77 19");
Expected Output : 2;


Describe:numberOfOcurrencesInText()

Test:"It should return 0 occurence of a word for an empty string."
Code:
const text = "";
const word = "red"
numberOfOccurencesInText(word,text);
Expected Output:0;

Test:"It should return 1 occurence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red"
numberOfOccurencesInText(word,text);
Expected Output: 1;

Test:"It should return 0 occurence of a word when the word and the text are the different."
Code:
const text = "red";
const word = "blue"
numberOfOccurencesInText(word,text);
Expected Output: 0;

Test:"It should return the number of occurences of a word."
Code:
const text = "red blue red red red green";
const word = "red"
numberOfOccurencesInText(word,text);
Expected Output: 4;

Test:"It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red"
numberOfOccurencesInText(word,text);
Expected Output: 3;

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3;

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0



Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"

Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"



Test:"It should mask offensive words in #tag. the words are [ "biffaroni," "loopdalop" "Zionks","muppeteer"];
code:
const word = stella is biffaroni
Expected Output:  stella is "####"


<!-- my README -->

# TEXT ANALYZER
By Ladegbaye Stella Ewatomi
A simple website for text Analyzer

## Technologies Used
* GIT
* HTML
* CSS
* Jquery

## Description
* This website allows users to input a sentence or word
  and then count the total of words you inputed
*  This website bold the specific word you input that it should bold 
* This number count the nmber of occurences in the text
* 

## Setup/Installation Requirements
* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open index.html on your browser

## Contact Information
Ladegbayeewatomi50@gmail.com.