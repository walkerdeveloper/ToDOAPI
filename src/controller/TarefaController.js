const mongoose = require('mongoose');
const Tarefa = require("../model/TarefaModel");

exports.getAll = (req, res) => {
    Tarefa.find({}, (err, tarefa) => {
        if (err) {
            res.send(err);
        }
        res.json(tarefa);
    })
};

exports.create = (req, res) => {
    let tarefa = new Tarefa(req.body);
    tarefa.save((err, tarefa) => {
        if (err)
            res.send(err);
        res.json(tarefa);
    });
};

exports.getById = (req, res) => {
    Tarefa.findById(req.params.id, (err, tarefa) => {
        if (err)
            res.send(err);
        res.json(tarefa);
    });
};

exports.update = (req, res) => {
    Tarefa.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, tarefa) => {
        if (err)
            res.send(err);
        res.json(tarefa);
    });
};

exports.delete = (req, res) => {
    Tarefa.remove({
        _id: req.params.id
    }, (err, tarefa) => {
        if (err)
            res.send(err);
        res.json({ message: 'Tarefa removida com sucesso.' });
    });
};
