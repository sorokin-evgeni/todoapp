import {TodoItem} from '../model/todo';

let id = 100;
const store: {list: TodoItem[]} = {
    list: [{
        id: '900',
        name: 'Test Item'
    }],
};

export const fetchList = () => Promise.resolve(store.list);
export const fetchItem = (request: {id: TodoItem['id']}) => {
    const item = store.list.find((item) => item.id === request.id);
    return item ? Promise.resolve(item) : Promise.reject({
        message: 'Not found',
        code: 404
    });
}

export const createItem = (data: Omit<TodoItem, 'id'>) => {
    id++;
    const newItem = {
        id: `${id}`,
        created: +new Date(),
        ...data,
    };
    store.list.push(newItem);
    return Promise.resolve(newItem);
}

export const updateItem = (data: TodoItem) => {
    const index = store.list.findIndex(({id}) => id === data.id);
    if (index === -1) {
        return Promise.reject({
            message: 'Not found',
            code: 404
        });
    }
    store.list[index] = {
        ...data,
        updated: +new Date(),
    };
    return Promise.resolve(data);
}

export const deleteItem = (data: TodoItem) => {
    const index = store.list.findIndex(({id}) => id === data.id);
    if (index === -1) {
        return Promise.reject({
            message: 'Not found',
            code: 404
        });
    }
    store.list.splice(index, 1);
    return Promise.resolve();
}
