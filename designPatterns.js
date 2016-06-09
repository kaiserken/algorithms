//reviewing basics and design patterns javascript

// module Patterns

var myModule = {

  myProperty: "someValue",

  // object literals can contain properties and methods.
  // e.g we can define a further object for module configuration:
  myConfig: {
    useCaching: true,
    language: "en"
  },

  // a very basic method
  saySomething: function () {
    console.log( "Where in the world is Paul Irish today?" );
  },

  // output a value based on the current configuration
  reportMyConfig: function () {
    console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
  },

  // override the current configuration
  updateMyConfig: function( newConfig ) {

    if ( typeof newConfig === "object" ) {
      this.myConfig = newConfig;
      console.log( this.myConfig.language );
    }
  }
};

// Outputs: Where in the world is Paul Irish today?
myModule.saySomething();

// Outputs: Caching is: enabled
myModule.reportMyConfig();

// Outputs: fr
myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});

// Outputs: Caching is: disabled
myModule.reportMyConfig();

var testModule = (function () {

  var counter = 0;

  return {

    incrementCounter: function () {
      counter++;
      console.log(counter);
      return counter;
    },

    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };

})();

// Usage:

// Increment our counter
testModule.incrementCounter();


// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();
testModule.incrementCounter();

var myNamespace = (function () {

  var myPrivateVar, myPrivateMethod;

  // A private counter variable
  myPrivateVar = 0;

  // A private function which logs any arguments
  myPrivateMethod = function( foo ) {
      console.log( foo );
  };

  return {

    // A public variable
    myPublicVar: "foo",

    // A public function utilizing privates
    myPublicFunction: function( bar ) {

      // Increment our private counter
      myPrivateVar++;
      console.log(myPrivateVar);
      // Call our private method using bar
      myPrivateMethod( bar );

    }
  };

})();
myNamespace.myPublicFunction("ken");
myNamespace.myPublicFunction("tom");
console.log(myNamespace);



var basketModule = (function () {

  // privates

  var basket = [];

  function doSomethingPrivate() {
    //...
  }

  function doSomethingElsePrivate() {
    //...
  }

  // Return an object exposed to the public
  return {

    // Add items to our basket
    addItem: function( values ) {
      basket.push(values);
    },

    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },

    // Public alias to a private function
    doSomething: doSomethingPrivate,

    // Get the total value of items in the basket
    getTotal: function () {

      var q = this.getItemCount(),
          p = 0;

      while (q--) {
        p += basket[q].price;
      }

      return p;
    }
  };
})();

// basketModule returns an object with a public API we can use

basketModule.addItem({
  item: "bread",
  price: 0.5
});

basketModule.addItem({
  item: "butter",
  price: 0.3
});

// Outputs: 2
console.log( basketModule.getItemCount() );

// Outputs: 0.8
console.log( basketModule.getTotal() );

// However, the following will not work:

// Outputs: undefined
// This is because the basket itself is not exposed as a part of our
// public API
console.log( basketModule.basket );

// This also won't work as it only exists within the scope of our
// basketModule closure, but not in the returned public object
//console.log( basket );



// Global module
var myModule = (function () {

  // Module object
  var module = {},
    privateVariable = "Hello World";

  function privateMethod() {
    // ...
  }

  module.publicProperty = "Foobar";
  module.publicMethod = function () {
    console.log( privateVariable, module );
  };

  return module;

})();

myModule.publicMethod();
