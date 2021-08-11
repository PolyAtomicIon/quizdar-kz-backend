const TaskValidator = require("../validators/taskValidator")

module.exports = function(req, res, next) {
    try {

        const { tasks } = req.body;

        if (!!tasks) {
            return res.status(403).json({ message: `Quiz is not valid` })
        }

        tasks.forEach(task => {
            let taskValidator = new TaskValidator(tasks)
            if (!taskValidator.isValid()) {
                return res.status(403).json({ message: `Task by id ${task.id} is not valid` })
            }
        });

        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({ message: "Пользователь не авторизован" })
    }
};