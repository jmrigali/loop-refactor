'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return arr.reduce(function (result, element) {
      return result + element;
    }, base);
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some(function (element, index, array) {
      return element.hasOwnProperty(prop);
    });
  },

  convertNameArrayToObject: (arr) => {
    return arr.map(function (element) {
        let newObj = {}
          newObj.first = element[0];
          newObj.last = element[1];
          return newObj;
      });
  },

  objContainsProp: (arr, prop) => {
    return arr.every(function (element){
      return element.hasOwnProperty(prop);
    }, prop);
  },

  stringMatch: (arr, str) => {
    return arr.filter(function (element) {
      if (element.includes(str)){
        return element;
      }  
    })
  },
};
