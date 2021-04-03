import { BsArrowsMove } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { useInput } from "../hooks/useInput";
import { useEffect } from "react";
import { useLocalStroage } from "../hooks/useLocalStroage";
function Login({ isLogin }: any) {
  const onClick = () => {
    if (inputs.name.length < 3 || inputs.lastname.length < 3) {
      alert("name/lastname must be at least 3 characters");
    } else {
      isLogin(true);
    }
  };
  const INITIAL_STATE = {
    name: "",
    lastname: "",
  };
  const [storage, setStorage] = useLocalStroage("inputs", INITIAL_STATE);
  const [inputs, setInputs] = useInput(storage);

  useEffect(() => {
    setStorage(inputs);
  }, [inputs]);

  return (
    <div className="login">
      <div className="left">
        <h4>Name</h4>
        <input
          type="text"
          name="name"
          placeholder=" Enter your name"
          value={inputs.name}
          onChange={setInputs}
        />
        <h4>Last Name</h4>
        <input
          type="text"
          name="lastname"
          placeholder=" Enter your last name"
          value={inputs.lastname}
          onChange={setInputs}
        />

        <button onClick={onClick}>Login</button>
      </div>
      <div className="right">
        <div className="prop">
          <div className="title">
            <BsArrowsMove size={16} color={"blue"} />
            <h3>Move work forward</h3>
          </div>
          <div className="detail">
            <p>
              From actionable meeting notes to inspiring project plans,
              kickstart team participation with a flexible workspace.
            </p>
          </div>
        </div>
        <div className="prop">
          <div className="title">
            <IoCreateOutline size={16} color={"blue"} />
            <h3>Create a source of truth</h3>
          </div>
          <div className="detail">
            <p>
              Save time by harnessing your teams' collective knowledge into
              easy-to-find answers for everyone.
            </p>
          </div>
        </div>
        <div className="prop">
          <div className="title">
            <AiOutlineCheckSquare size={16} color={"blue"} />
            <h3>Try for free</h3>
          </div>
          <div className="detail">
            <p>Completely free</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
