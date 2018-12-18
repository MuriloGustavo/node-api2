describe('Routes: Books', () => {

    const Books = app.datasource.models.Books;

    const defaultId = 1;

    const defaultBook = {
        id: defaultId,
        name: 'Default book'
    };

    beforeEach(done => {
        Books
            .destroy({ where: {} })
            .then(() => Books.create(defaultBook))
            .then(() => {
                done();
            });
    });
    
    describe('GET /books', () => {
        it('should return a list of books', done => {

            request
                .get('/books')
                .end((err, res) => {
                    expect(res.body[0].id).to.eql(defaultBook.id);
                    expect(res.body[0].name).to.eql(defaultBook.name);
                    done(err);
                });
        });

        context('when an id is specified', done => {
            it('should return 200 with one book', done => {
                
                request
                    .get(`/books/${defaultId}`)
                    .end((err, res) => {
                        expect(res.status).to.eql(200);
                        expect(res.body.id).to.eql(defaultBook.id);
                        expect(res.body.name).to.eql(defaultBook.name);
                        done(err);
                    });
            });
        });
    });

    describe('POST /books', () => {
        context('when posting a book', () => {
            it('should return a new book with status code 201', done => {
                const newBook = {
                    id: 2,
                    name: 'Default book'
                };

                request
                    .post('/books')
                    .send(newBook)
                    .end((err, res) => {
                        expect(res.status).to.eql(201);
                        expect(res.body.id).to.eql(newBook.id);
                        expect(res.body.name).to.eql(newBook.name);
                        done(err);
                    });
            });
        });
    });

    describe('PUT /books/:id', () => {
        context('when editing a book', () => {
            it('should update the book and return 200 as status code', done => {
                const updatedBook = {
                    name: 'Updated book'
                };

                request
                    .put(`/books/${defaultId}`)
                    .send(updatedBook)
                    .end((err, res) => {
                        expect(res.status).to.eql(200);
                        done(err);
                    });
            });
        });
    });

    describe('DELETE /books/:id', () => {
        context('when deleting a book', () => {
            it('should delete a book and return 204 as status code', done => {

                request
                    .delete(`/books/${defaultId}`)
                    .end((err, res) => {
                        expect(res.status).to.eql(204);
                        done(err);
                    });
            });
        });
    });

});