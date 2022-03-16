import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware , combineReducers} from "redux";
import { createLogger } from "redux-logger";
import  thunkMiddleware  from "redux-thunk";
import { searchTheRobots , requestRobots } from "./reducers";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

const logger = createLogger();
const rootReducer = combineReducers({searchTheRobots , requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware ,logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App className="tc" />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
