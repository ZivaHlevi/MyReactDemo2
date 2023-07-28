import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <p>This is Menu</p>
      <Link to="/library">Go to Books List</Link>
      <Link to="/tasks">Go to Tasks List</Link>
    </div>
  );
}

export default Menu;
