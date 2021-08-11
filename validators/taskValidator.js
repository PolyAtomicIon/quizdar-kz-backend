const { check } = require("express-validator")
const { validatorsByType } = require('./taskTypeValidator')

export class TaskValidator {

    constructor(task) {
        this.task = task;
        this.validators = validatorsByType[task.type] || []
    }

    isValid() {
        if (!!this.validators)
            return false
        if (!!this.task.answer)
            return false
        if (!!this.task.time)
            return false
        return true
    }

}