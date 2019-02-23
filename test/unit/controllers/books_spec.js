import BooksController from '../../../src/controllers/books';

describe('Controllers: Books', () => {

    const Book = app.datasource.models.Books;

    const defaultBook = [{
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
    }];

    const defaultRequest = {
        params: {}
    };

    describe('getAll() books', () => {
        it('should return a list of books', () => {

            Book.findAll = sinon.stub();

            const response = {
                send: sinon.spy()
            };

            Book.findAll.withArgs({}).resolves(defaultBook);

            const booksController = new BooksController(Book);
            return booksController.getAll(defaultRequest, response)
                .then(() => {
                    sinon.assert.calledWith(response.send, defaultBook);            
                });
        });

        context('when an error occurs', () => {
            it('should return 400', () => {
                const response = {
                    send: sinon.spy(),
                    status: sinon.stub()
                };
        
                response.status.withArgs(400).returns(response);
                Book.findAll = sinon.stub();
                Book.findAll.withArgs({}).rejects({ message: 'Error' });
        
                const booksController = new BooksController(Book);
        
                return booksController.getAll(defaultRequest, response)
                    .then(() => {
                        sinon.assert.calledWith(response.status, 400);
                        sinon.assert.calledWith(response.send, 'Error');
                    });
            });
        });

    });

    describe('getById() book', () => {
        it('should call send with one book', () => {
            const response = {
                send: sinon.spy()
            };

            Book.findOne = sinon.stub();
            Book.findOne.withArgs({ where: defaultRequest.params }).resolves(defaultBook[0]);

            const booksController = new BooksController(Book);

            return booksController.getById(defaultRequest, response)
                .then(() => {
                    sinon.assert.calledWith(response.send, defaultBook[0]);
                });
        });

        context('when an error occurs', () => {
            it('should return 400', () => {
                const response = {
                    send: sinon.spy(),
                    status: sinon.stub()
                };
        
                response.status.withArgs(400).returns(response);
                Book.findOne = sinon.stub();
                Book.findOne.withArgs({ where: defaultRequest.params }).rejects({ message: 'Error' });
        
                const booksController = new BooksController(Book);
        
                return booksController.getById(defaultRequest, response)
                    .then(() => {
                        sinon.assert.calledWith(response.status, 400);
                        sinon.assert.calledWith(response.send, 'Error');
                    });
            });
        });
    });

    describe('create() book', () => {
        it('should call send with a new book', () => {
            const requestWithBody = Object.assign({}, { body: defaultBook[0] }, defaultRequest);
            const response = {
                send: sinon.spy(),
                status: sinon.stub()
            };

            response.status.withArgs(201).returns(response);
            Book.create = sinon.stub();
            Book.create.withArgs({ requestWithBody }).resolves(defaultBook[0]);

            const booksController = new BooksController(Book);

            return booksController.create(requestWithBody, response)
                .then(() => {
                    sinon.assert.calledWith(response.send, defaultBook[0]);
                    sinon.assert.calledWith(response.status, 201);
                });
        });

        context('when an error occurs', () => {
            it('should return 422', () => {
            
            });
        });
    });
});