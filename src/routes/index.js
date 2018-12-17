export default (app) => {
    app.route('/')
        .get((req, res) => res.send('API is working correctly'));
};