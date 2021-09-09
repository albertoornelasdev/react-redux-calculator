
import React from "react";
import ReactDOM from "react-dom";

// Import Redux Features
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

// Import my container
import Calculator from "./containers/Calculator";

// Create my store and pass reducer
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Calculator />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
