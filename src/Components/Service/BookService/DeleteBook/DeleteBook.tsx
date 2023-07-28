import axios from "axios";
import "./DeleteBook.css";
import urlService from "../../../../Services/GlobalService/UrlService";
import { useNavigate, useParams } from "react-router-dom";
import notifyService from "../../../../Services/GlobalService/NotificationService";

function DeleteBook(): JSX.Element {
    const navigate=useNavigate();
    const params= useParams();
    const id= +(params.id || 0);
    const yes=()=>{
        axios.delete<any>(`${urlService.booksUrl}/book/${ id }`).then(res=>{notifyService.success("Delete Ok"); navigate("/library");}).catch();
        //axios.delete<any>(`${urlService.todo}/${ id }`)
    };
    const no=()=>{navigate(-1
        
        
        )};
    return (
        <div className="DeleteBook">
            <p>Are You Shore you want delete book #{id}</p>
            
            <button onClick={yes} >YES</button>
            <button onClick={no}>CANCEL</button>
			
        </div>
    );
}

export default DeleteBook;
