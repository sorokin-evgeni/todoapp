import {Application} from 'express';

export function todoFactory(app: Application) {
    let id = 100;
    const todos = [{
        id: '100',
        name: 'From server with love'
    }];
    app.get('/api/todo', (req, res) => {
        res.json(todos);
    });

    app.get('/api/todo/:id', (req, res) => {
        const todo = todos.find(({id}) => id === req.params.id);
        if (!todo) {
            res.sendStatus(404);
            res.end();
        } else {
            res.send(todo);
        }
    });

    app.post('/api/todo', (req, res) => {
        id++;
        const newItem = {
            id: `${id}`,
            created: +new Date(),
            ...req.body,
        };
        todos.push(newItem);
        res.send(newItem);
    })

    app.put('/api/todo/:id', (req, res) => {
        const todoIndex = todos.findIndex(({id}) => id === req.params.id);
        if (todoIndex === -1) {
            res.sendStatus(404);
            res.end();
        } else {
            const oldTodo = todos[todoIndex];
            const mergedTodo = {
                ...oldTodo,
                ...req.body,
                id: oldTodo.id,
            };
            todos[todoIndex] = mergedTodo;
            res.send(mergedTodo);
        }
    });
}
