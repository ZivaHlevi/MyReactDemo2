import { useEffect, useState } from "react";
import "./TasksList.css";
import axios from "axios";
import TaskCard from "../../Cards/TaskCard/TaskCard";
import { TaskModel } from "../../../Models/TaskModel";
import urlService from "../../../Services/GlobalService/UrlService";
import notifyService from "../../../Services/GlobalService/NotificationService";


function TasksList(): JSX.Element {
    const [tasks,setTasks]= useState<TaskModel[]>([]);
    useEffect(() => {
        axios.get<TaskModel[]>(urlService.taskUrl)
        .then((res)=>{
            console.log(res.data);
            setTasks(res.data);
            notifyService.success("Yea Yea!! it success ")
        }).catch((err)=>{console.log(err);
        notifyService.error("Oh...not succeed")});

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
