import { Link } from "react-router-dom";
import { BookModel } from "../../../Models/BookModel";
import "./BookCard.css";

interface BookCardProps {
  book: BookModel;
}

function BookCard(props: BookCardProps): JSX.Element {
  return (
    <div className="BookCard">
      <p>Id: {props.book.id}</p>
      <p>Book Name:{props.book.name}</p>
      <p>Year of publish: {props.book.year}</p>
      <div className="button">
        <Link to={`/book/delete/${props.book.id}`}>
          <button className="deleteButton">Delete</button>
        </Link>

        <button className="editButton">Edit</button>
      </div>
    </div>
  );
}

export default BookCard;
