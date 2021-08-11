module.exports = function(req, res, next) {
    try {
        console("There will validation of types")
        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({ message: "Пользователь не авторизован" })
    }
};