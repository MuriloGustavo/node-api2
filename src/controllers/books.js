class BooksController {
    
    constructor(Books) {
        this.Books = Books;
    }

    getAll(req, res) {
        return this.Books.findAll({})
            .then(books => res.send(books))
            .catch(err => res.status(400).send(err.message));
    }

}

export default BooksController;