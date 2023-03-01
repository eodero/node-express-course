const express = require('express');
const app = express();
const appRouter = require('./routes/index')
// const appAuthenticator = require('./middleware/authenticator')

//middleware
app.use(express.json());

app.use('/', appRouter);

const port = process.env.PORT || 3000;
const start = async () => {
    await app.listen(port, () => {
        console.log(`Server is Listening on port ${port}...`);
    });
}

start();