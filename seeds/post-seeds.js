const { Post } = require('../models');

const postData = [
    {
        title: 'The Great Post Review',
        content: 'Reviewing the greatest post of all time!',
        user_id: 1
    },
    {
        title: 'Review of the Greats',
        content: 'Greatest review ever!!',
        user_id: 2
    },
    {
        title: 'Post Great Reviews',
        content: 'Posting great reviews!!!',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;