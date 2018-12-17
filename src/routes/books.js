import BooksController from '../controllers/books';

export default (app) => {
    const booksController = new BooksController(app.datasource.models.Books);
    app.route('/books')
        .get((req, res) => {
            return booksController.getAll(req, res);
        });
};