var calcController = (function() {
  var appData = {
    input: "",
    output: ""
  }

  var calcOutput = function(input) {
    var output = eval(input);
    if(!input) {
      appData.output = "";
    }
    if(output) {
      // update output only if input is valid
      appData.output = String(output);
    }
  }

  // public methods
  return {
    updateInput: function(input, reset) {
      // updates input and output

      if(reset) {
        appData.input = input;
      } else {
        appData.input = appData.input + input;
      }
      calcOutput(appData.input);
    },
    getOutput: function() {
      return appData.output;
    },
    getInput: function() {
      return appData.input;
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
    var output;
    var buttons = document.querySelectorAll("button");

    nodeListForEach(buttons, function(button) {
      button.addEventListener("click", function() {
        var buttonContent = button.textContent
        if (buttonContent === "DEL") {
          // delete number and update input/output
          input = calcCtrl.getInput();
          input = input.slice(0, -1);
          console.log(input);

          // update and render input
          UICtrl.displayInput(input, true);
          calcCtrl.updateInput(input, true);
          // render output
          output = calcCtrl.getOutput();
          UICtrl.displayOutput(output);
        } else if (buttonContent === "=") {
          // show output (set output as the new input)
          output = calcCtrl.getOutput();
          UICtrl.displayInput(output, true);
          calcCtrl.updateInput(output, true);
          UICtrl.displayOutput("");
        } else {
          // update input and calculate output
          UICtrl.displayInput(buttonContent);
          calcCtrl.updateInput(buttonContent);

          // update output
          output = calcCtrl.getOutput();
          UICtrl.displayOutput(output);
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
