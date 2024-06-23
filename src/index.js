const WORD_REPLACEMENTS = {
  small: "smol",
  cute: "kawaii~",
  fluff: "floof",
  love: "luv",
  stupid: "baka",
  idiot: "baka",
  what: "nani",
  meow: "nya~",
  roar: "rawrr~",
};

const EMOJIS = [
  "rawr x3",
  "OwO",
  "UwU",
  "o.O",
  "-.-",
  ">w<",
  "(⑅˘꒳˘)",
  "(ꈍᴗꈍ)",
  "(˘ω˘)",
  "(U ᵕ U❁)",
  "σωσ",
  "òωó",
  "(///ˬ///✿)",
  "(U ﹏ U)",
  "( ͡o ω ͡o )",
  "ʘwʘ",
  ":3",
  ":3", // important enough to have twice
  "XD",
  "nyaa~~",
  "mya",
  ">_<",
  "😳",
  "🥺",
  "😳😳😳",
  "rawr",
  "^^",
  "^^;;",
  "(ˆ ﻌ ˆ)♡",
  "^•ﻌ•^",
  "/(^•ω•^)",
  "(✿oωo)",
];

const PUNCTUATION = /[.!?\n]/g;
const PUNCTUATION_OR_END = /[.!?\n]$|(?<=\s)([.!?\n])/g;

/**
 * Return a random element from the given array.
 * @template T
 * @param {T[]} arr
 * @returns {T}
 */
const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * UwUify the given text.
 * @param {string} text
 * @param {number} stutterChance
 * @param {number} emojiChance
 * @param {number} tildeChance
 * @returns {string}
 */
const uwuify = (
  text,
  stutterChance = 0.2,
  emojiChance = 0.1,
  tildeChance = 0.1
) => {
  text = text.toLowerCase();

  for (const [normalWord, uwuWord] of Object.entries(WORD_REPLACEMENTS))
    text = text.replace(normalWord, uwuWord);

  text = text.replace(/n([aeou][^aeiou])/g, "ny$1"); // Replace n followed by a vowel with ny (e.g. "na" -> "nya")
  text = text.replace(/(?<!w)[lr](?!w)/g, "w"); // Replace l or r not preceded or followed by w with w (e.g. "l" -> "w")

  text = text.replace(/(\s|^)([a-zA-Z])/g, (_, space, letter) =>
    Math.random() < stutterChance
      ? `${space}${letter}-${letter}`
      : `${space}${letter}`
  );

  text = text.replace(PUNCTUATION, (match) =>
    Math.random() < emojiChance ? `${match} ${randomElement(EMOJIS)}` : match
  );

  text = text.replace(PUNCTUATION_OR_END, (punctuation) =>
    Math.random() < tildeChance ? "~" : punctuation
  );

  return text;
};

module.exports = uwuify;
