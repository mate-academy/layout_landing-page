"use strict";

function printBackwards(input, start, end) {
  for (let i = end; i >= start; i - 1) {
    console.log(input[i]);
  }
}

console.log(printBackwards("javassss", 2, 6));
