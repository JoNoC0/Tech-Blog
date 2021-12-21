const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "#1 comment!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Commenter of the Year!",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Teach me how to dougie!",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;