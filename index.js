//function is passed as an argument
function receivesAFunction(callback) {
    return callback();
  }
  const greeting = receivesAFunction(() => 'Hello World !')
  console.log(greeting);

  function returnsANamedFunction() {
    return function sayHello() {
      return "Hello Everyone";
    }
  }

  console.log(returnsANamedFunction()) // returns [Function: sayHello] to invoke the returned function add ()
  console.log(returnsANamedFunction()());

  function returnsAnAnonymousFunction() {
    return function (firstName, secondName, lang = 'JavaScript', callback) {
      return `Hello ${firstName} ${secondName} this is a wonderful time to learn ${lang}, please say ${callback()()} to Her.}`;

    }
  }

  console.log(returnsAnAnonymousFunction()('Ivy', 'Wambui', 'python',returnsANamedFunction));
