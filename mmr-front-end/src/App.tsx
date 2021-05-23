import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import Test2 from "./screens/test2/test2";
import { createBrowserHistory } from "history";
import FrontPage from "./screens/frontPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const history = createBrowserHistory();

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Router history={history}>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>

          <Route exact path="/kitties">
            <Test2></Test2>
          </Route>
        </Switch>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
