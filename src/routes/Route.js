module.exports = (app) => {
    let tarefa = require('../controller/TarefaController');

    // todoList Routes
    app.route('/tarefas')
        .get(tarefa.getAll)
        .post(tarefa.create);


    app.route('/tasks/:taskId')
        .get(tarefa.getById)
        .put(tarefa.update)
        .delete(tarefa.delete);
};
