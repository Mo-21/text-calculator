export class TextStats {
  getNumberOfWords(text) {
    return text.split(" ").filter((word) => word !== "").length;
  }
}
