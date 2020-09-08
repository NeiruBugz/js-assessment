exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function (acc, val) {
      return acc + val;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(a => a !== item);
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var len;

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    let a = arr.slice();
    a.push(item);
    return a;
  },

  truncate: function(arr) {
    return arr.slice(0, arr.length - 1);
  },

  prepend: function(arr, item) {
    let a = [item];
    return a.concat(arr);
  },

  curtail: function(arr) {
    return arr.slice(1, arr.length);
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    let a = [...arr].slice(0, index);
    let b = [...arr].slice(index, arr.legnth);
    a.push(item);
    return a.concat(b);
  },

  count: function(arr, item) {
    return arr.filter(a => a === item).length;
  },

  duplicates: function(arr) {
    let result = [];

    arr.forEach(function(element, index) {
    
      if (arr.indexOf(element, index + 1) > -1) {
      
        if (result.indexOf(element) === -1) {
          result.push(element);
        }
      }
    });

  return result;
  },

  square: function(arr) {
    return arr.map(a => a ** 2);
  },

  findAllOccurrences: function(arr, target) {
    let indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === target)
            indexes.push(i);
    return indexes;
  }
};
