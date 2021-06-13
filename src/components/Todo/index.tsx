import React from 'react';
import {createItem, deleteItem, fetchList, updateItem} from '../../service/todo';
import {ItemsView} from './ItemsView';
import {TodoItem} from '../../model/todo';
import {APIContext, initialState, reducer, useApi} from './store';

interface TodoProps {}

export const Todo: React.FC<TodoProps> = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        fetchList().then((items) => {
            setItems(items)
        });
    }, [])
    return (
        <APIContext.Provider value={{
            state,
            api: {
                fetchList: () => {
                    return fetchList().then((list) => {
                        dispatch({
                            type: 'SET_LIST',
                            meta: {list}
                        });
                        return list;
                    })
                },
                create: (item: Omit<TodoItem, 'id'>) => {
                    return createItem(item).then((item) => {
                        dispatch({
                            type: 'SET_ONE',
                            meta: {item}
                        });
                        return item;
                    })
                },
                update: (item: TodoItem) => {
                    return updateItem(item).then((item) => {
                        dispatch({
                            type: 'SET_ONE',
                            meta: {item}
                        })
                        return item;
                    })
                },
                delete: (item: TodoItem) => {
                    return deleteItem(item).then(() => {
                        dispatch({
                            type: 'DELETE',
                            meta: {item}
                        })
                    })
                }
            }
        }}>
            <ItemsList/>
        </APIContext.Provider>
    )
}

interface ItemsListProps {}

const ItemsList: React.FC<ItemsListProps> = () => {
    const {state, api} = useApi();
    React.useEffect(() => {
        api.fetchList();
    }, []);
    const handleCreate = React.useCallback(() => {
        api.create({
            name: '',
        })
    }, []);

    return <ItemsView items={state.list} onAdd={handleCreate}/>
}
