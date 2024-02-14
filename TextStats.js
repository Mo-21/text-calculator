export class TextStats {
  getNumberOfWords(text) {
    return text.split(" ").filter((word) => word !== "").length;
  }

  getNumberOfChars(text) {
    return text.length;
  }

  getNumberOfSentences(text) {
    let numberOfSentences = 0;

    for (let i = 0; i < text.length; i++) {
      if (
        text.charAt(i) === "." ||
        text.charAt(i) === "?" ||
        text.charAt(i) === "!"
      ) {
        numberOfSentences++;
      }
    }

    return numberOfSentences;
  }
}
