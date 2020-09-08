exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let counter;
    function f () {
      console.log(start++);

      if (start <= end) {
        counter = setTimeout(f, 100);
      }
    }

    f();

    return {
      cancel: function () {
        counter && clearTimeout(counter);
      }
    }
  }
};
