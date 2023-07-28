import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../Pages/Home/Home";
import Page404 from "../Pages/Page404/Page404";
import TasksList from "../Lists/TasksList/TasksList";
import BooksList from "../Lists/BooksList/BooksList";
import DeleteBook from "../Service/BookService/DeleteBook/DeleteBook";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/tasks" element={<TasksList/>}></Route>
                <Route path="/library" element={<BooksList/>}></Route>
                <Route path="/book/delete/:id" element={<DeleteBook/>}></Route>
                <Route index element={<Home/>}></Route>
                <Route path="*" element={<Page404/>}></Route>
            </Routes>
            
			
        </div>
    );
}

export default Routing;
