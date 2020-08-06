const express = require('express');
const connectDB = require('./config/db')
const path = require('path')
const app = express();

connectDB();

app.use(express.json({extended:false}))

app.use('/api/comments', require('./components/comments'));
app.use('/api/auth', require('./components/auth'));
app.use('/api/users', require('./components/users'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get('/', (req, res) => {
        res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`))