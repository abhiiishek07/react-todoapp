import React, { useState } from "react";
import Todo from "./Todo";
import "./style.css";

const App = () => {
  const [data, setData] = useState("");
  const [note, setNote] = useState([]);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const update = () => {
    setNote((oldItems) => {
      if (data.length > 0) return [...oldItems, data];
      else return [...oldItems];
    });
    setData("");
  };
  const deleteItem = (id) => {
    setNote((oldItems) => {
      return oldItems.filter((elem, index) => {
        return index !== id;
      });
    });
  };
  const clearAll = () => {
    setNote([]);
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <div className="heading">
            {" "}
            <h1>ToDo List</h1>{" "}
          </div>
          <div className="typePlace">
            <input
              type="text"
              placeholder="Add a list"
              onChange={handleChange}
              value={data}
            />
            <button className="add_btn" onClick={update}>
              +
            </button>
          </div>
          <div className="container_lists">
            <ol>
              {note.map((m, index) => {
                return (
                  <Todo key={index} id={index} text={m} onSelect={deleteItem} />
                );
              })}
            </ol>
          </div>
        </div>
        <button className="clearAll_btn" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </>
  );
};
export default App;
