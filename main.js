import { TextStats } from "./TextStats";

const textarea = document.querySelector("textarea");
const chars = document.querySelector(".chars");
const words = document.querySelector(".words");
const sentences = document.querySelector(".sentence");
const punctuation = document.querySelector(".punctuation");

const stats = new TextStats();

textarea.addEventListener("keyup", (event) => {
  words.textContent = stats.getNumberOfWords(event.target.value);
  chars.textContent = stats.getNumberOfChars(event.target.value);
  sentences.textContent = stats.getNumberOfSentences(event.target.value);
  punctuation.textContent = stats.getNumberOfPunctuation(event.target.value);
});
