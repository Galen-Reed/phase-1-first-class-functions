function receivesAFunction(callback) {
    return callback();
  }
  
  receivesAFunction(function (callback) { return 'Get back here!'; });

function returnsANamedFunction() {
    return function fn() { return 'weird'};
}

function returnsAnAnonymousFunction() {
    return function() {return 'more weird'};
}