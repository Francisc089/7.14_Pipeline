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
  console.log(strArray) 
  strArray.forEach(function(element) {
    var wordArray = element.split(' ')
  })   

  return str;
}
console.log('hello')

module.exports = pipelineSync;