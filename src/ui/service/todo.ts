import {TodoItem} from '../model/todo';
import {tojson} from './utils';

export const fetchList = () => {
    //Promise.resolve(store.list)
    return fetch('/api/todo', {}).then(tojson);
};
export const fetchItem = (request: {id: TodoItem['id']}) => {
    return fetch(`/api/todo/${request.id}`, {}).then(tojson);
}

export const createItem = (data: Omit<TodoItem, 'id'>) => {
    return fetch('/api/todo', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(tojson)
}

export const updateItem = (data: TodoItem) => {
    return fetch(`/api/todo/${data.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(tojson)
}

export const deleteItem = (data: TodoItem) => {
    return fetch(`/api/todo/${data.id}`, {
        method: 'delete',
    })
}
