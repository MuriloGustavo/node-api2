describe('Routes: Books', () => {

    const defaultBook = {
        id: 1,
        name: 'Default book'
    };
    
    describe('GET /books', () => {
        it('should return a list of books', done => {

            request
                .get('/books')
                .end((err, res) => {
                    expect(res.body[0]).to.eql(defaultBook);
                    done(err);
                });
        });
    });

});