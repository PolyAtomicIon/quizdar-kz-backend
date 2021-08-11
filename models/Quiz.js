var mongoose = require('mongoose');

var QuizSchema = new mongoose.Schema({
    quiz_name: String,
    quiz_desc: String,
    tasks: [Object],
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Quiz', QuizSchema);