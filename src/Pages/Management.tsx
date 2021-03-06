import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { stateType } from "../global";

import { useLocalStroage } from "../hooks/useLocalStroage";

import { IoMdAdd } from "react-icons/io";
import { AiFillDelete, AiFillInfoCircle } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

import { v4 } from "uuid";
import _ from "lodash";
import Modal from "../Components/Modal";

function Management() {
  let time = new Date();

  const item = {
    id: v4(),
    name: "Clean the house",
    date: "11.04.2021",
    hour: "09.05",
  };
  const item2 = {
    id: v4(),
    name: "Wash the car",
    date: "11.04.2021",
    hour: "22.13",
  };
  const DEFAULT_TODO = {
    todo: {
      title: "Todo",
      items: [item, item2],
    },
    inprogress: {
      title: "In Progress",
      items: [],
    },
    done: {
      title: "Completed",
      items: [],
    },
  };
  const [storage, setStorage] = useLocalStroage("tasks", DEFAULT_TODO);
  const [state, setState] = useState<stateType>(storage);
  const [text, setText] = useState<string | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [temp, setTemp] = useState<string>("");
  const handleDragEnd = ({ source, destination }) => {
    if (!destination) {
      //don't do anything if the destination is null
      return;
    }
    if (
      //don't do anything if it's not moving anywhere
      destination.index === source.index && // same index
      destination.droppableId === source.droppableId // same place
    ) {
      return;
    }
    //creating a copy of item before removing it from state
    const itemCopy = { ...state[source.droppableId].items[source.index] };

    setState((prev) => {
      prev = { ...prev };
      //remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1);
      //adding to new items array location
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );
      setStorage(state);
      return prev;
    });
  };

  const addItem = () => {
    if (text) {
      if (text.length < 30) {
        if (state.todo.items.length < 7) {
          state.todo.items.push({
            id: v4(),
            name: text,
            date: time.toLocaleDateString(),
            hour: time.toLocaleTimeString(),
          });
        } else {
          alert("todo list full");
        }
        setStorage(state);
        setText("");
      } else {
        alert("task's name very long");
      }
    } else {
      return;
    }
  };
  const removeTask = (id: string) => {
    _.map(state, (data, key) => {
      data.items = data.items.filter((data) => data.id !== id);
    });
    setStorage({ ...state });
  };
  const openModal = (id: string) => {
    setIsOpen(true);
    setTemp(id);
  };

  useEffect(() => {
    setState(state);
  }, [storage]);

  return (
    <div className="management">
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          return (
            <div key={key} className="taskColumn">
              <h3>{data.title}</h3>
              <Droppable droppableId={key}>
                {(provided) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="taskDropCol"
                    >
                      {data.items.map((el, index) => {
                        return (
                          <Draggable
                            key={el.id}
                            index={index}
                            draggableId={el.id}
                          >
                            {(provided) => (
                              <div className="drags">
                                <div
                                  className="dragTask"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="taskName">{el.name}</div>

                                  <div className="icons">
                                    <div className="tooltip">
                                      <AiFillInfoCircle />
                                      <span className="tooltipText">
                                        was created {el.date} / {el.hour}
                                      </span>
                                    </div>

                                    <BsPencilSquare
                                      className="iconEdit"
                                      onClick={() => openModal(el.id)}
                                    />
                                    <AiFillDelete
                                      className="iconDelete"
                                      onClick={() => removeTask(el.id)}
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                      {key === "todo" && (
                        <div className="add">
                          <input
                            type="text"
                            placeholder="add task"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                          />
                          <IoMdAdd className="icon" onClick={addItem} />
                        </div>
                      )}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
        {isOpen && (
          <>
            <Modal
              id={temp}
              state={state}
              setStorage={setStorage}
              onClose={setIsOpen}
            ></Modal>
          </>
        )}
      </DragDropContext>
    </div>
  );
}

export default Management;
