var calcController = (function() {
  var appData = {
    input: "",
    output: ""
  }

  var calcOutput = function(input) {
    var output = eval(input);

    if(output) {
      // update output only if input is valid
      appData.output = output;
    }
  }

  // public methods
  return {
    updateInput: function(input) {
      // updates input and output
      appData.input = appData.input + input;
      calcOutput(appData.input);
    }
  }

})();

var UIController = (function() {

  var renderInput = function(input, reset) {
    if(reset) {
      document.getElementById("input").textContent = input;
    } else {
      // if reset is false, append input
      var currInput = document.getElementById("input").textContent;
      document.getElementById("input").textContent = currInput + input;
    }
  }

  var renderOutput = function(output, reset) {
    document.getElementById("output").textContent = output;
  }

  // public methods
  return {
    displayInput: function(input, reset) {
      renderInput(input, reset);
    },

    displayOutput: function(output, reset) {
      renderOutput(output, reset);
    }
  }
})();


var appController = (function(calcCtrl, UICtrl) {

  // custom forEach function
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
          // show output (set output as the new input)
        } else {
          // update input
          UICtrl.displayInput(buttonContent);
          calcCtrl.updateInput(buttonContent);

          // calculate output


          // update output
        }
      })
    });
  }


  // public methods
  return {
    init: function() {
      UICtrl.displayInput("", true);
      UICtrl.displayOutput("", true);

      setupEventListeners();
    }
  }
})(calcController, UIController);


// initialize app
appController.init();
