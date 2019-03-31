import * as ReactDOM from "react-dom";
import * as React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { App } from "./src/components/App";
import { londonDataReducer } from "./src/londonData/reducer";
import { ourCompanyDataReducer } from "./src/ourCompanyData/reducer";
import { userCompanyDataReducer } from "./src/userCompanyData/reducer";

import "./src/components/style.scss";
export const allReducers = combineReducers({
  londonData: londonDataReducer,
  ourCompanyData: ourCompanyDataReducer,
  userCompanyData: userCompanyDataReducer
});

export const store = createStore(allReducers);

const AppWithRedux: React.FunctionComponent = (): JSX.Element => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWithRedux />, document.getElementById("root"));
