import { useState } from "react";
import Login from "./Components/Login";
import "./index.scss";
import ToDoScreen from "./Pages/ToDoScreen";

function App() {
  const [login, isLogin] = useState<boolean>(false);
  return (
    <div className="App">
      {login ? <ToDoScreen isLogin={isLogin} /> : <Login isLogin={isLogin} />}
    </div>
  );
}

export default App;
