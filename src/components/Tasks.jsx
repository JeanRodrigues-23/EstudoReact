import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("tittle", task.tittle);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.length !== 0 ? props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 p-2 rounded-md text-white w-full flex items-center gap-2 ${task.isCompleted && "line-through"}`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.tittle}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => props.onDeleteTask(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      )) : (
        <div className="flex justify-center">
          <p className="text-slate-500">Lista vazia</p>
        </div>
      )}
    </ul>
  );
}

export default Tasks;
