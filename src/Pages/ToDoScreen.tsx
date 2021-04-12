import Leftbar from "../Components/Leftbar";
import Topbar from "../Components/Topbar";
import Management from "./Management";

function ToDoScreen() {
  return (
    <div className="screen">
      <div>
        <Leftbar /> 
      </div>
      <div className="content">
        <Topbar />
        <Management />
      </div>
    </div>
  );
}

export default ToDoScreen;
