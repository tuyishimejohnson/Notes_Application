import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Todos = () => {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedItems = localStorage.getItem("tasks");
    if (storedItems) {
      setTasks(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInput = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevState) => [
        ...prevState,
        { name: newTask, completed: false, markedCheck: false },
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks((prevState) => {
      const updatedArr = [...prevState];
      updatedArr.splice(index, 1);
      return updatedArr;
    });
  };

  const handleCompletedTasks = (value) => {
    setTasks((prevState) =>
      prevState.map((item) =>
        item.name === value
          ? {
              ...item,
              completed: !item.completed,
              markedCheck: !item.markedCheck,
            }
          : item
      )
    );
  };

  return (
    <div className="w-2/5 bg-blue-200 m-auto mt-24 py-6 text-gray-700">
      <h1 className="text-2xl text-center py-4 font-semibold">
        Todo Application
      </h1>
      <form className="flex m-auto justify-center">
        <input
          type="text"
          placeholder="Enter a Todo"
          value={newTask}
          className="bg-gray-100 py-2 
            rounded-l-xl pl-5 shadow-lg w-3/4"
          onChange={handleInput}
        />
        <button
          className="bg-gray-300 px-3 py-2 
            rounded-r-xl shadow-lg font-semibold"
          onClick={addTask}
        >
          Add a task
        </button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex space-y-3 items-center justify-between px-10"
          >
            <span
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : task.completed,
              }}
              onClick={() => handleCompletedTasks(task.name)}
            >
              <div className="">
                <div className="flex items-center relative">
                  {task.name}
                  <input
                    type="checkbox"
                    checked={task.markedCheck}
                    onChange={() => handleCompletedTasks(task.markedCheck)}
                    className="size-5 appearance-none rounded-full border border-gray-500 cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={
                      task.completed
                        ? `absolute right-1 text-gray-500`
                        : "hidden"
                    }
                  />
                </div>
              </div>
            </span>

            <form className="flex gap-4 items-center">
              <button
                className="border border-gray-200 shadow-md text-white px-4 py-2 
                        rounded-full hover:bg-gray-500"
                onClick={() => deleteTask(index)}
              >
                <FontAwesomeIcon icon={faTrash} className="text-red-400" />
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
