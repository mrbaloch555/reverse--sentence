"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = void 0;
function reverse(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
module.exports = reverse;
