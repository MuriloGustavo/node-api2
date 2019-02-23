class BooksController {
    
    constructor(Book) {
        this.Book = Book;
    }

    getAll(req, res) {
        return this.Book.findAll({})
            .then(books => res.send(books))
            .catch(err => res.status(400).send(err.message));
    }

    getById(req, res) {
        const params = req.params;

        return this.Book.findOne({ where: params })
            .then(book => res.send(book))
            .catch(err => res.status(400).send(err.message));
    }

    create(req, res) {
        return this.Book.create(req.body)
            .then(book => res.status(201).send(book))
            .catch(err => res.status(422).send(err.message));
    }

    update(req, res) {
        const params = req.params;

        return this.Book.update(req.body, { where: params })
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).send(err.message)); 
    }

    remove(req, res) {
        const params = req.params;

        return this.Book.destroy({ where: params })
            .then(() => res.sendStatus(204))
            .catch(err => res.status(400).send(err.message));
    }

}

export default BooksController;