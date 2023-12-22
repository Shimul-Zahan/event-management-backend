// taskManagement
// 6AcwVmt6rKCiuiQN
const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./src/database/connectDB');
const port = process.env.PORT || 5000;
const allTask = require('./src/routes/routes')
const postTask = require('./src/routes/routes');
const updateTask = require('./src/routes/routes');
const connectMiddleware = require('./src/middleware/middleware');

connectMiddleware(app);
app.use(allTask);
app.use(postTask);
app.use(updateTask);



app.get('/health', (req, res) => {
    res.send('Server is good');
})

app.all('*', (req, res, next) => {
    const error = new Error(`Invalid url: [${req.url}]`)
    error.status = 404;
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 5000).json({ message: err.message });
})

const final = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server running at localhost: ${port}`);
    })
}
final();

