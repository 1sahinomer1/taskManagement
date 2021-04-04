function Navbar() {
  const data: any = localStorage.getItem("inputs");
  var dataJson = JSON.parse(data);

  return (
    <div className="navbar">
      <div className="leftNav">
        <input type="text" placeholder="add task" />
        <button>Add</button>
      </div>
      <div className="rightNav">
        <p>{dataJson.name}'s Task Management </p>
        
      </div>
    </div>
  );
}

export default Navbar;
