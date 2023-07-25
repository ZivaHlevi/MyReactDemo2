import moment from "moment";
import { TaskModel } from "../../../Models/TaskModel";
import "./TaskCard.css";

interface TaskCardProps {
  task: TaskModel;
}
function TaskCard(props: TaskCardProps): JSX.Element {
  return (
    <div className="TaskCard">
      <p>Id number: {props.task.id}</p>
      <p>Title: {props.task.title}</p>
      <p>Description: {props.task.description}</p>
      <p>📅  {moment(props.task.when).format("DD/mm/yy")}</p>
      <div className="button">
        <button className="deleteButton">Delete</button>
        <button className="editButton">Edit</button>
      </div>
    </div>
  );
}

export default TaskCard;
