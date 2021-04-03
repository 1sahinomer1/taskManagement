import Navbar from "../Components/Navbar";
import Topbar from "../Components/Topbar";

function ToDoScreen({ isLogin }: any) {
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
      </div>
    </div>
  );
}

export default ToDoScreen;
