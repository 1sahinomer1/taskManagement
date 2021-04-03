function ToDoScreen({ isLogin }: any) {
  const data: any = localStorage.getItem("inputs");
  var dataJson = JSON.parse(data);
  console.log(data);
  console.log(dataJson.name);
  console.log(dataJson.lastname);
  return (
    <div>
      <p>{dataJson.name}</p>
    </div>
  );
}

export default ToDoScreen;
