// receivesAFunction
function receivesAFunction(callback) {
    callback(); // Calls the callback function
  }

// returnsANamedFunction
function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }

  // returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    return () => {
      console.log("I am an anonymous function!");
    };
  }
  
