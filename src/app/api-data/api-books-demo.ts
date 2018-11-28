import { InMemoryDbService } from "angular-in-memory-web-api";
import { books } from "../books";
export class BooksDBService implements InMemoryDbService {
    createDb() {
        const bookList = books;

        return {bookList};
    }
}