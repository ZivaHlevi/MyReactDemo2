import { Outlet } from "react-router-dom";
import "./Main.css";
import Routing from "../../Routing/Routing";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <Routing/>
            <Outlet/>
        </div>
    );
}

export default Main;
