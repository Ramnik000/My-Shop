import express from 'express';
import http from 'http';

const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    })
});

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
