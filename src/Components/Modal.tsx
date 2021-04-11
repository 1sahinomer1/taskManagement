import { stateType } from "../global";
import _ from "lodash";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
type modalComp = {
  id: string;
  onClose: any;
  state: stateType;
  setStorage: any;
};
function Modal({ id, onClose, state, setStorage }: modalComp) {
  const [input, setInput] = useState<any>();
  const changeText = (id: string, value: string) => {
    _.map(state, (data) => {
      data.items.map((e, key) => {
        if (e.id === id) {
          e.name = value;
        }
        setStorage(state);
        onClose(false);
      });
    });
  };
  return (
    <div className="modal">
      <div className="header">
        <div className="title">
          <p>Change Task Name</p>
        </div>
        <div>
          <AiFillCloseCircle
            className="modalIcon"
            onClick={() => onClose(false)}
          />
        </div>
      </div>
      <hr />
      <div className="inputChange">
        <input
          type="text"
          placeholder="set Text"
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
        />
      </div>
      <div className="buttonChange">
        <button onClick={() => changeText(id, input)}>Change</button>
      </div>
    </div>
  );
}

export default Modal;
