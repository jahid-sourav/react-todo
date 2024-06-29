import { useState } from "react";
import Swal from "sweetalert2";

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Todo Updated",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <li className="mt-4">
      {isEditing ? (
        <div className="flex flex-wrap justify-center gap-3">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="p-2 w-full lg:w-2/3 rounded-md border border-green-500 outline-none text-lg font-medium text-black"
          />
          <button
            onClick={handleUpdate}
            className="p-2 rounded-md bg-green-500 text-black font-medium text-lg"
          >
            Update
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-3">
          <span className="font-medium text-xl text-black">{todo.text}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 px-2 rounded-md bg-green-500 text-white font-medium text-lg"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="p-1 px-2 rounded-md bg-red-500 text-white font-medium text-lg"
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
