import { useEffect, useState } from "react";
import "./TasksList.css";
import axios from "axios";
import TaskCard from "../../Cards/TaskCard/TaskCard";
import { TaskModel } from "../../../Models/TaskModel";
import urlService from "../../../Services/UrlService";


function TasksList(): JSX.Element {
    const [tasks,setTasks]= useState<TaskModel[]>([]);
    useEffect(() => {
        axios.get<TaskModel[]>(urlService.taskUrl)
        .then((res)=>{
            console.log(res.data);
            setTasks(res.data);
        }).catch((err)=>{console.log(err)});

    },[]);
    return (
        <div className="TasksList">
			{
                <p>
                {tasks.map((t, idx) => <TaskCard task={t} key={`task${idx}`} />)}
              </p>
              
            }
        </div>
    );
}

export default TasksList;
