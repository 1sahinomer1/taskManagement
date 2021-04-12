import { BsArrowsMove } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { useInput } from "../hooks/useInput";
import { useEffect } from "react";
import { useLocalStroage } from "../hooks/useLocalStroage";
import { useHistory } from "react-router-dom";
import { motion as m } from "framer-motion";
function Login() {
  const history = useHistory();
  const onClick = () => {
    if (inputs.name.length < 2 || inputs.lastname.length < 2) {
      alert("name/lastname must be at least 2 characters");
    } else {
      history.push("/home");
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
        <m.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
        >
          Login
        </m.button>
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
