console.log('starting notes.js');

// console.log(module);

// module.exports.age = 25;

// module.exports.addNote = function (){
//  console.log('add Notes');
//  return 'New note';
// };

var result = 0;

module.exports.addFunction = function (a,b){
  result = a + b;
  console.log('The sum is', result);
  return result;
};
