const fs = require('fs');
const path = require('path');

const operations = {
    set: (input, arg )=> {
      return arg*1;
    },
    add: (input, arg)=> {
      //we need to add to something
      if(typeof input === 'undefined'){
        throw 'input required';
      }
      return input + arg*1;
    },
    mult: (input, arg)=> {
      //we need to multiply by something
      if(typeof input === 'undefined'){
        throw 'input required';
      }
      return input * arg*1;
    }
  };

const pipelineSync = function(str) {
  var strArray = str.split('|');

  var count = 0;

  strArray.forEach(function(element) {
    let wordArr = element.trim().split(' ')
    console.log(wordArr)
    count = operations[wordArr[0]](count, wordArr[1])
  })   

  return count;
}

const operations2 = {
  addFromFile: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fs.readFile(arg, (err, result)=> {
      //console.log('fs ',fs.readFile())
      fn(err, input + result.toString()*1);
    });
  },
  set: (input, arg, fn) => {
    fn(null, arg*1);
  },
  add: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fn(null, input + arg*1);
  },
  mult: (input, arg, fn)=> {
    if(typeof input === 'undefined'){
      return fn('input is required');
    }
    fn(null, input * arg*1);
  }
};

const callback = function(arg, operation) {
  return operation;
}

const pipelineAsync = function(str) {
  
  var strArray = str.split('|');

  var count = 0;

  strArray.forEach(function(element) {
    let wordArr = element.trim().split(' ')
    console.log(wordArr)
    if(wordArr[0] === 'addFromFile') {
      const fileName = path.join(__dirname, wordArr[1]);
      console.log('fileName', fileName)
      count = operations2[wordArr[0]](count, fileName, callback)
      console.log('count file' , count);
      
    }
    else {
      count = operations2[wordArr[0]](count, wordArr[1], callback)
      
    }
  })   

  return count;
}
module.exports = {pipelineSync, pipelineAsync}