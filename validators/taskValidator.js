const { fieldsToValidateByType } = require('./fieldsToValidateByType')
const baseFieldsToValidate = [
    'answer',
    'time',
    'question'
]

const isFieldExist = (obj) => {
    return (field) => {
        return (field in obj && obj[field])
    }
}

module.exports = function(task) {
    let fieldsToValidate = fieldsToValidateByType[task.type] || []
    fieldsToValidate = fieldsToValidate.concat(baseFieldsToValidate)
    return fieldsToValidate.every(isFieldExist(task))
};