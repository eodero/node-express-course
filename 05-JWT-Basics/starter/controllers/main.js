//check username, password in post(login) request
// if exist create new JWT
//send back to client(front end)

//set up authentication so only the request with JWT can access the dashboard(user who is logged in can access the page)
const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    // mongoose validation
    // Joi
    // check if username and password exists in the controller

    if (!username || !password) {
        throw new BadRequestError('Please provide username and password', 400);
    }
    // demo , normally provided by DB
    const id = new Date().getDate();

    //try to keep payload small, better experience for user
    // in production use long, complex and unguessable string values
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' });

    // res.send('Fake Login/Register/Signup Route');
    res.status(200).json({
        msg: 'user created',
        token
    })
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)

    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
}

module.exports = {
    login,
    dashboard
}