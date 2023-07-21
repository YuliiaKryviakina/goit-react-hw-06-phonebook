import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
);
