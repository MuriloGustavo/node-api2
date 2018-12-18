import BooksController from '../controllers/books';

export default (app) => {
    const booksController = new BooksController(app.datasource.models.Books);
    
    app.route('/books')
        .get((req, res) => {
            booksController.getAll(req, res);
        })
        .post((req, res) => {
            booksController.create(req, res); 
        });

    app.route('/books/:id')
        .get((req, res) => {
            booksController.getById(req, res);
        })
        .put((req, res) => {
            booksController.update(req, res);
        })
        .delete((req, res) => {
            booksController.remove(req, res);
        });
};