const taskValidator = require("../validators/taskValidator")

module.exports = function(req, res, next) {
    try {

        const { tasks } = req.body;

        tasks.forEach(task => {
            if (!taskValidator(task)) {
                return res.status(403).json({ message: `Task by id ${task.id} is not valid` })
            }
        });

        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({ message: "Пользователь не авторизован" })
    }
};