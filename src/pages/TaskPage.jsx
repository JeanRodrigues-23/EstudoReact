import { ChevronsLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Tittle from "../components/Tittle";

function TaskPage() {
  const [serchParams] = useSearchParams();
  const tittle = serchParams.get("tittle");
  const description = serchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 bottom-0 top-0 text-slate-100"
          >
            <ChevronsLeftIcon />
          </button>

          <Tittle>
            Detalhes da tarefa
          </Tittle>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{tittle}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
