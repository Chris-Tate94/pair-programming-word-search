let transpose = require("./transpose");

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  let transposeLetters = transpose(letters);
  const verticalJoin = transposeLetters.map((ls) => ls.join(""));

  if (letters.length === 0) {
    return false;
  }
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (v of verticalJoin) {
    if (v.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
