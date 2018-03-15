"use strict";
// block-scoped "let"
const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'great'},
  { subject: 'Elephants', verb: 'are', object: 'large'},
];
// es6 feature: object destructuring
function say ( {subject, verb, object}) {
  // template strings
  console.log(`${subject}, ${verb}, ${object}`);
}
  // for..of

  for (let s of sentences) {
    say(s);
  }
