import { useRef } from "react";
import React, { useState } from "react";

function TodoMain() {
  const [list, setList] = useState([]);
  const [message, setmessage] = useState("");
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <div>
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
                if (inputValue.trim() !== "") {
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
                className="flex justify-between items-center bg-gray-300 p-2 rounded-lg"
              >
                <div className="flex gap-1">
                  <div className="flex">
                    <input type="checkbox" />
                  </div>
                  <div>{item}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        let DeleteBtn = document.getElementById("DeleteBtn");
                        setmessage("Do you want to delete this task?");
                        openDialog();
                        DeleteBtn.addEventListener("click", () => {
                          let updatedList = [...list];
                          updatedList.splice(index, 1);
                          setList(updatedList);
                          closeDialog();
                        });
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
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <dialog className="border rounded-md w-96 p-2 " ref={dialogRef}>
          <p className="w-64">
            {message}
          </p>
          <br />
          <div className=" flex pr-2 justify-end gap-2">
            <button
              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              onClick={closeDialog}
            >
              Keep
            </button>
            <button
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
              id="DeleteBtn"
            >
              Delete
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default TodoMain;
