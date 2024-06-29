import { useState } from "react";
import Swal from "sweetalert2";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Todo Added",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="flex justify-center pt-5">
      <form
        className="w-full flex flex-wrap justify-center gap-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add A Todo"
          className="w-full lg:w-1/3 p-2 rounded-md border border-green-600 outline-none text-lg font-medium"
        />
        <button
          type="submit"
          className="py-2 px-6 bg-black text-white rounded-md text-lg font-medium"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
