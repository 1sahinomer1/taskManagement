function Navbar() {
  const data: any = localStorage.getItem("inputs");
  var dataJson = JSON.parse(data);

  return (
    <div className="navbar">
      <div className="leftNav">
        <p>{dataJson.name}'s Task Management </p>
      </div>
      <div className="rightNav">
        <div className="hours">
          <p></p>
        </div>
        <div className="date"></div>
      </div>
    </div>
  );
}

export default Navbar;
