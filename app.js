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
    displayInput: function(input) {
      renderInput(input);
    },

    displayOutput: function(output) {
      renderOutput(output);
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
      button.addEventListener("click", function() {
        var buttonContent = button.textContent
        if (buttonContent === "DEL") {
          // delete number
        } else if (buttonContent === "=") {
          // show output
        } else {
          // update input
          UICtrl.displayInput(buttonContent);

          // calculate output

          // update output
        }
      })
    });
  }


  // public methods
  return {
    init: function() {
      UICtrl.displayInput("");
      UICtrl.displayOutput("");

      setupEventListeners();
    }
  }
})(calcController, UIController);


// initialize app
appController.init();
