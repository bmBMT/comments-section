import ReactHtmlParser from 'react-html-parser'

export default function convertToPostText(content) {
  const splitedWords = content.split(" ");
  const text = splitedWords.map((word) => {
    if (word[0] === "@") {
      return `<span style="color: var(--moderate-blue); font-weight: 500;">${word}</span>`;
    } else {
      return word;
    }
  }).join(' ');

  return ReactHtmlParser(text);
}