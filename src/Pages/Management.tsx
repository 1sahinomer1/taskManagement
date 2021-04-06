import { useState, useEffect } from "react";
import { stateType } from "../global";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useLocalStroage } from "../hooks/useLocalStroage";
import { IoMdAdd } from "react-icons/io";
import { v4 } from "uuid";
import _ from "lodash";
function Management() {
  const item = {
    id: v4(),
    name: "Clean the house",
  };
  const item2 = {
    id: v4(),
    name: "Clean the mom",
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

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return alert("ibo yavaş çok kötü düşen bak");
    }
    if (
      destination?.index === source?.index &&
      destination?.droppableId === source?.droppableId
    ) {
      alert("");
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
      return prev;
    });
  };
  useEffect(() => {
    setStorage(state);
  }, [state]);
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
                              <div
                                className="dragTask"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {el.name}
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                      <div className="add">
                        <input type="text" placeholder="add task" />
                        <IoMdAdd className="icon" />
                      </div>
                    </div> //gives width to the box it goes^
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Management;
