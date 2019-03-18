console.log('starting app..');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var user = os.userInfo();

// fs.appendFile('greetings.txt',`hello ${user.username} ! Your age is ${notes.age}` , function(err){
//   if (err){
//   console.log('unable to write file');
//   }
// });

//var res = notes.addNote();

var sum = notes.addFunction(3,9);

// fs.appendFile('greetings.txt',`hello ${user.username} ! The sum is ${sum}` , function(err){
//   if (err){
//   console.log('unable to write file');
//   }
// });

// console.log(_.isString(true));
// console.log(_.isString('true'));

var filterarray = _.uniq([1,1,1,2,2,3,3,4,5,5,5,5,6,7,8,9,'ishan','ishan']);
console.log(filterarray);


// console.log('user is', user);
