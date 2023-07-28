import { useEffect, useState } from "react";
import { BookModel } from "../../../Models/BookModel";
import "./BooksList.css";
import axios from "axios";
import urlService from "../../../Services/GlobalService/UrlService";
import notifyService from "../../../Services/GlobalService/NotificationService";
import BookCard from "../../Cards/BookCard/BookCard";

function BooksList(): JSX.Element {
  const [books, setBooks] = useState<BookModel[]>([]);

  useEffect(() => {
    axios
      .get<BookModel[]>(urlService.booksUrl)
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
        notifyService.success("Successfully exported list of books");
      })
      .catch((err) => {
        notifyService.error("Failed to export list of books");
      });
  }, []); // Add 'books' to the dependency array

  return (
    <div className="BooksList">
        <p className="bookView">
            
        {books.map((b, idx) => <BookCard book={b} key={`book${idx}`} />)}
      </p>
    </div>
  );
}

export default BooksList;


