import { useState } from "react";

function Navbar() {
  const data: any = localStorage.getItem("inputs");
  var dataJson = JSON.parse(data);
  let time = new Date();

  let min = time.toLocaleTimeString([], { timeStyle: "short" });
  const [minute, setMinute] = useState<string>(min);

  function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString([], { timeStyle: "short" });
    setMinute(t);
  }
  setInterval(myTimer, 1000);

  return (
    <div className="topbar">
      <div className="left">
        <p>{dataJson.name}'s Task Management </p>
      </div>

      <div className="right">
        <div className="hours">
          <p>{minute}</p>
        </div>
        <div className="date">
          <p>{time.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
