import React, { useState } from "react";

function TodoMain() {
  const [list, setList] = useState([]);

  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-600">
          Task List
        </h1>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Add task here..."
            id="Input"
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={() => {
              let Input = document.getElementById("Input");
              let inputValue = Input.value;
            if(inputValue.trim()!==""){
              
              setList([...list, inputValue]);
              Input.value = ""; 
            }
            }}
            className="w-36 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Add Task
          </button>
        </div>
        <ul className="space-y-2">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-300 p-2 rounded-lg"
            >
              {index + 1}. {item}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    let updatedList = [...list];
                    updatedList.splice(index, 1);
                    setList(updatedList);
                  }}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    let editValue = prompt("Enter the new task", item);
                    if (editValue && editValue.trim() !== "") {
                      let editedList = [...list];
                      editedList.splice(index, 1, editValue);
                      setList(editedList);
                    }
                  }}
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoMain;
