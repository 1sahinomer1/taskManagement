import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import "./styles/index.scss";

import { Suspense } from "react";
import ToDoScreen from "./Pages/ToDoScreen";
function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={ToDoScreen} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
