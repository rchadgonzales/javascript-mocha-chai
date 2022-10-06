// TEST 1
/* 
module.exports = function () {
  return "Hi";
  // return "hi"; THIS WILL RETURN AN ERROR
};
*/

// TEST 2 AND TEST 3
/*
module.exports = {
  sayHi: function () {
    return "hi";
    // return 1; THIS WILL RETURN AN ERROR
  },
};
*/

// TEST 4 AND TEST 5
module.exports = {
  sayHi: function () {
    return "hi";
  },
  addNumbers: function (value1, value2) {
    return value1 + value2;
  },
};
