import { TextStats } from "./TextStats";

const textarea = document.querySelector("textarea");
const chars = document.querySelector(".chars");
const words = document.querySelector(".words");
const sentence = document.querySelector(".sentence");
const punctuation = document.querySelector(".punctuation");

const stats = new TextStats();

textarea.addEventListener("keyup", (event) => {
  const numberOfWords = stats.getNumberOfWords(event.target.value);
  words.textContent = numberOfWords;
});
