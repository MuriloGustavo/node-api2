export default {
    database: 'books',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'books.sqlite',
        operatorsAliases: false,
        freezeTableName: true,
        define: {
            underscored: true,
        }
    }
};