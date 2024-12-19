const { Router } = require('express');

app.post('/posts', async (req, res) => {
    const { username, content } = req.body;

    if (!username || !content) {
        return res.status(400).send('Username and content are required!');
    }

    const newPost = new Post({ username, content });

    try {
        await newPost.save();
        res.status(201).send(newPost);
    } catch (error) {
        res.status(500).send('Error saving post: ' + error);
    }
});


app.post('/posts/:id/like', async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).send('Post not found');
        }

        post.likes += 1; // Increment likes by 1
        await post.save();
        res.send(post); // Send the updated post
    } catch (error) {
        res.status(500).send('Error liking post: ' + error);
    }
});

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        res.status(500).send('Error fetching posts: ' + error);
    }
});



