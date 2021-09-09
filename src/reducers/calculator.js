const initialState = {
  currentResult: " ",
  total: "0",
  syntaxError: false,
};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    // When element is pressed
    case "ELEMENT":
      if (!state.syntaxError) {
        return Object.assign({}, state, {
          currentResult: state.currentResult + action.element,
        });
      } else {
        return Object.assign({}, state, {
          currentResult: "",
          syntaxError: false,
        });
      }

    // When C sign is pressed
    case "C":
      return Object.assign({}, state, {
        currentResult: "",
        total: "0",
      });

    // When CE sign is pressed
    case "CE":
      return Object.assign({}, state, {
        currentResult: state.currentResult.slice(0, -1),
      });
    // When = operator is pressed
    case "EQUAL":
      // Calculating...
      if (state.currentResult.includes("--")) {
        return Object.assign({}, state, {
          currentResult: state.currentResult.replace("--", "+"),
        });
      } else if (state.currentResult.includes("++")) {
        return Object.assign({}, state, {
          currentResult: state.currentResult.replace("++", "+"),
        });
      } else if (
        state.currentResult[0] === "/" ||
        state.currentResult[0] === "*"
      ) {
        return Object.assign({}, state, {
          currentResult: "Syntax Error",
          syntaxError: true,
        });
      } else {
        return Object.assign({}, state, {
          total: eval(state.currentResult),
          currentResult: "",
          syntaxError: false,
        });
      }

    // Default return state
    default:
      return state;
  }
};

export default calculator;
