export class TextStats {
  getNumberOfWords(text) {
    return text.split(" ").filter((word) => word !== "").length;
  }

  getNumberOfChars(text) {
    return text.length;
  }
}
