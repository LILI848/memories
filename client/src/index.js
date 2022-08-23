import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, componse } from "redux";
import thunk from "redux-thunk";

ReactDOM.render(<App />, document.getElementById("root"));
