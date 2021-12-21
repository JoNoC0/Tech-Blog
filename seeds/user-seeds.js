const { User } = require('../models');

const userData = [
    {
        username: 'JohnDoe',
        password: '12345'
    },
    {
        username: 'JaneDoe',
        password: '54321'
    },
    {
        username: 'DoeDoe',
        password: '13524'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;