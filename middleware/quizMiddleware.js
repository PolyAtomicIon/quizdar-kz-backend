const taskValidator = require("../validators/taskValidator")

module.exports = function(req, res, next) {
    try {

        const { tasks } = req.body;
        if (tasks === undefined || tasks === null) {
            return res.status(403).json({ message: `Quiz is not valid` })
        }

        for (const i in tasks) {
            if (!taskValidator(tasks[i]))
                return res.status(403).json({ message: `Task by id ${i} is not valid` })
        }

        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({ message: "Quiz is not valid" })
    }
};