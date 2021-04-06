import Navbar from "../Components/Navbar";
import Topbar from "../Components/Topbar";
import Management from "./Management";

function ToDoScreen() {
  return (
    <div className="screen">
      <div>
        <Topbar />
      </div>
      <div className="content">
        <Navbar />
        <Management />
      </div>
    </div>
  );
}

export default ToDoScreen;
