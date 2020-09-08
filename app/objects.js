exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {

  },

  iterate: function(obj) {
    const props = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        props.push(key + ': ' + obj[key]);
      }
    }
    return props;
  }
};
