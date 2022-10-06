// TEST 1
/*
// const assert = require('assert');
const assert = require("chai").assert;
const test = require("../test");

describe("Test", function () {
  it("test should return Hi", function () {
    assert.equal(test(), "Hi");
  });
});
*/

// TEST 2
/*
const assert = require("chai").assert;
const sayHi = require("../test").sayHi;

describe("Test", function () {
  it("test should return hi", function () {
    assert.equal(sayHi(), "hi");
  });
});
*/
// ===/===/===/ SAME AS ABOVE \===\===\=== \\
/*
const assert = require("chai").assert;
const sayHi = require("../test").sayHi;

describe("Test", function () {
  it("test should return hi", function () {
    let result = sayHi();
    assert.equal(result, "hi");
  });
});
*/

// TEST 3
/*
const assert = require("chai").assert;
const sayHi = require("../test").sayHi;

describe("Test", function () {
  it("sayHi should return hi", function () {
    let result = sayHi();
    assert.equal(result, "hi");
  });

  it("sayHi should return type string", function () {
    let result = sayHi();
    assert.typeOf(result, "string");
  });
});
*/

// TEST 4
/*
const assert = require("chai").assert;
const sayHi = require("../test").sayHi;
const addNumbers = require("../test").addNumbers;

describe("Test", function () {
  it("sayHi should return hi", function () {
    let result = sayHi();
    assert.equal(result, "hi");
  });

  it("sayHi should return type string", function () {
    let result = sayHi();
    assert.typeOf(result, "string");
  });

  it("addNumbers should be above 7", function () {
    let result = addNumbers(7, 7);
    // let result = addNumbers(3, 3); THE RESULT IS AN ERROR
    assert.isAbove(result, 7);
  });
});
*/

// TEST 5
/*
const assert = require("chai").assert;
const sayHi = require("../test").sayHi;
const addNumbers = require("../test").addNumbers;
// const test = require("../test");

describe("Test", function () {
  it("sayHi should return hi", function () {
    let result = sayHi();
    assert.equal(result, "hi");
  });

  it("sayHi should return type string", function () {
    let result = sayHi();
    assert.typeOf(result, "string");
  });

  it("addNumbers should be above 7", function () {
    let result = addNumbers(7, 7);
    assert.isAbove(result, 7);
  });

  it("addNumbers should return type number", function () {
    let result = addNumbers(7, 7);
    assert.typeOf(result, "number");
  });
});
*/
// ===/===/===/ SAME AS ABOVE \===\===\=== \\
/*
const assert = require("chai").assert;
// const sayHi = require("../test").sayHi;
// const addNumbers = require("../test").addNumbers;
const test = require("../test");

describe("Test", function () {
  it("sayHi should return hi", function () {
    let result = test.sayHi();
    assert.equal(result, "hi");
  });

  it("sayHi should return type string", function () {
    let result = test.sayHi();
    assert.typeOf(result, "string");
  });

  it("addNumbers should be above 7", function () {
    let result = test.addNumbers(7, 7);
    assert.isAbove(result, 7);
  });

  it("addNumbers should return type number", function () {
    let result = test.addNumbers(7, 7);
    assert.typeOf(result, "number");
  });
});
*/
// ===/===/===/ SAME AS ABOVE \===\===\=== \\
/*
const assert = require("chai").assert;
// const sayHi = require("../test").sayHi;
// const addNumbers = require("../test").addNumbers;
const test = require("../test");

// RESULTS
sayHiResult = test.sayHi();
addNumbersResult = test.addNumbers(7, 7);

describe("Test", function () {
  it("sayHi should return hi", function () {
    // let result = test.sayHi();
    assert.equal(sayHiResult, "hi");
  });

  it("sayHi should return type string", function () {
    // let result = test.sayHi();
    assert.typeOf(sayHiResult, "string");
  });

  it("addNumbers should be above 7", function () {
    // let result = test.addNumbers(7, 7);
    assert.isAbove(addNumbersResult, 7);
  });

  it("addNumbers should return type number", function () {
    // let result = test.addNumbers(7, 7);
    assert.typeOf(addNumbersResult, "number");
  });
});
*/
// ===/===/===/ SAME AS ABOVE \===\===\=== \\
const assert = require("chai").assert;
// const sayHi = require("../test").sayHi;
// const addNumbers = require("../test").addNumbers;
const test = require("../test");

// RESULTS
sayHiResult = test.sayHi();
addNumbersResult = test.addNumbers(7, 7);

describe("Test", function () {
  describe("sayHi()", function () {
    it("sayHi should return hi", function () {
      // let result = test.sayHi();
      assert.equal(sayHiResult, "hi");
    });

    it("sayHi should return type string", function () {
      // let result = test.sayHi();
      assert.typeOf(sayHiResult, "string");
    });
  });

  describe("addNumbers()", function () {
    it("addNumbers should be above 7", function () {
      // let result = test.addNumbers(7, 7);
      assert.isAbove(addNumbersResult, 7);
    });

    it("addNumbers should return type number", function () {
      // let result = test.addNumbers(7, 7);
      assert.typeOf(addNumbersResult, "number");
    });
  });
});
