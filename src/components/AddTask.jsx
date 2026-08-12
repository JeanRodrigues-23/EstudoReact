import { useState } from "react";
import InputTask from "./InputTask";

function AddTask(props) {
  const [tittle, setTittle] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div className="space-y-4 p-6 bg-slate-400 p-2 rounded-md flex flex-col">
      <InputTask
        type="text"
        placeholder="Digite o título da tarefa"
        value={tittle}
        onChange={(event) => setTittle(event.target.value)}
      />
      <InputTask
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={() => {
        if(!tittle.trim() || !description.trim()) {
          return alert("Prencha o título e descrição da tarefa!")
        }

        props.onAddTaskSubmit(tittle, description)
        setTittle("")
        setDescription("")
      }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
    </div>
  );
}

export default AddTask;
