var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Quiz = require('../models/Quiz.js');

class quizController {
    async getAllQuizzes(req, res, next) {
        try {
            Quiz.find(function(err, quizs) {
                if (err) return next(err);
                res.json(quizs);
            });
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "Quizzes not found" })
        }
    }

    async getQuizById(req, res, next) {
        try {
            Quiz.findById(req.params.id, function(err, post) {
                if (err) return next(err);
                res.json(post);
            });
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: `Quiz by id ${req.params.id} not found` })
        }
    }

    async saveQuiz(req, res, next) {
        try {
            console.log(req.body);
            Quiz.create(req.body, function(err, post) {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                res.json(post);
            });
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "Quiz not saved" })
        }
    }

    async updateQuizById(req, res, next) {
        try {
            console.log(req.body);
            Quiz.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                res.json(post);
            });
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: `Quiz by id ${req.params.id} not updated` })
        }
    }

    async deleteQuizById(req, res, next) {
        try {
            Quiz.findByIdAndRemove(req.params.id, req.body, function(err, post) {
                if (err) return next(err);
                res.json(post);
            });
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: `Quiz by id ${req.params.id} not deleted` })
        }
    }
}

module.exports = new quizController()