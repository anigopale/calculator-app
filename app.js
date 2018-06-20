var calcController = (function() {
  var appData = {
    input: "",
    output: ""
  }
})();

var UIController = (function() {

  var renderInput = function(input) {
    document.getElementById("input").textContent = input;
  }

  var renderOutput = function(output) {
    document.getElementById("output").textContent = output;
  }

  // public methods
  return {
    displayInputOutput: function(obj) {
      renderInput(obj.input);
      renderOutput(obj.output);
    }
  }
})();


var appController = (function(calcCtrl, UICtrl) {

  // custom for each function
  var nodeListForEach = function(list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  }

  var setupEventListeners = function() {
    var buttons = document.querySelectorAll("button");

    nodeListForEach(buttons, function(button) {
      console.log(button.textContent);
    });
  }


  // public methods
  return {
    init: function() {
      UICtrl.displayInputOutput({
        input: "",
        output: ""
      });

      setupEventListeners();
    }
  }
})(calcController, UIController);


// initialize app
appController.init();
