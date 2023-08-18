const login = async (req, res) => {
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: 'Hello, user', secret: `Here is  your authorized data, your lucker numer is ${luckyNumber}` })
}

module.exports = {
login,
dashboard
}