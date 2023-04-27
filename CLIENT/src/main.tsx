import { Profiler } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import clientApollo from "./apolloClient";
import "./GlobalStyle.css";

//
const logTimes = (
  id: any,
  phase: any,
  actualTime: any,
  baseTime: any,
  startTime: any,
  commitTime: any
) => {
  // console.log(`${id}'s ${phase} phase:`);
  // console.log(`Actual time: ${actualTime}`);
  // console.log(`Base time: ${baseTime}`);
  // console.log(`Start time: ${startTime}`);
  // console.log(`Commit time: ${commitTime}`);
};
//

//
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={clientApollo}>
    <Provider store={store}>
      <Profiler id="App" onRender={logTimes}>
        <App />
      </Profiler>
    </Provider>
  </ApolloProvider>
);
