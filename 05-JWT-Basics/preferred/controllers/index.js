require('dotenv').config();
const jwt = require('jsonwebtoken');


const logon = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: process.env.LIFETIME });

    res.status(200).json({ msg: 'user logged in', token });

}

const hello = async (req, res) => {
    res.status(200).json({ msg: `Hello ${req.user.name}` });
}


module.exports = {
    logon, hello
};


