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

  getNumberOfPunctuation(text) {
    let numberOfPunctuation = 0;

    for (let i = 0; i < text.length; i++) {
      if (punctuation_marks.includes(text.charAt(i))) numberOfPunctuation++;
    }

    return numberOfPunctuation;
  }

  plotData(text) {
    const labels = ["chars", "words", "sentences", "punctuations"];
    const data = {
      labels,
      datasets: [
        {
          label: "Text Stats",
          data: [
            this.getNumberOfChars(text),
            this.getNumberOfWords(text),
            this.getNumberOfSentences(text),
            this.getNumberOfPunctuation(text),
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    return { labels, data, config };
  }
}

const punctuation_marks = [
  ".",
  ",",
  "!",
  "?",
  ";",
  ":",
  "-",
  "—",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "'",
  '"',
  "*",
  "/",
  "&",
  "#",
  "@",
  "^",
  "%",
  "$",
  "<",
  ">",
  "=",
  "+",
  "_",
  "|",
  "`",
  "~",
];
