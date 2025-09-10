'use strict';

function buildTrie(...words) {
  const trie = {};

  if (words.length === 0 || (words.length === 1 && !words[0])) {
    return trie;
  }

  for (const word of words) {
    let current = trie;
    let prefix = '';

    for (let i = 0; i < word.length; i++) {
      prefix += word[i];

      const isLastChar = i === word.length - 1;

      if (!current[prefix]) {
        current[prefix] = isLastChar ? null : {};
      } else if (current[prefix] === null) {
        current[prefix] = {};
      }

      if (!isLastChar) {
        current = current[prefix];
      }
    }
  }

  return trie;
}

buildTrie('trie'); // {'t': {'tr': {'tri': {'trie': null}}}}
