import Navbar from "../Components/Navbar";
import Topbar from "../Components/Topbar";
import Management from "./Management";

function ToDoScreen() {
  const data: any = localStorage.getItem("inputs");
  var dataJson = JSON.parse(data);
  console.log(data);
  console.log(dataJson.name);
  console.log(dataJson.lastname);
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
