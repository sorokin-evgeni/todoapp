import React from 'react';
import {TodoItem} from '../../model/todo';

type Action = {
    type: 'SET_LIST',
    meta: {
        list: TodoItem[];
    }
} | {
    type: 'SET_ONE',
    meta: {
        item: TodoItem;
    }
} | {
    type: 'DELETE',
    meta: {
        item: TodoItem;
    }
}

export const initialState: State = {
    list: []
}

interface State {
    list: TodoItem[];
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_LIST':
            return {
                ...state,
                list: action.meta.list,
            }
        case 'SET_ONE':
            const index = state.list.findIndex(({id}) => id === action.meta.item.id);
            return {
                ...state,
                list: index === -1 ? [...state.list, action.meta.item] : [
                    ...state.list.slice(0, index),
                    {
                        ...action.meta.item
                    },
                    ...state.list.slice(index+1),
                ]
            }
        case 'DELETE': {
            const index = state.list.findIndex(({id}) => id === action.meta.item.id);
            if (index === -1) {
                return state;
            }
            return {
                ...state,
                list: index === -1 ? [...state.list, action.meta.item] : [
                    ...state.list.slice(0, index),
                    ...state.list.slice(index + 1),
                ]
            }
        }
    }
}

export const APIContext = React.createContext<{
    state: State,
    api?: {
        fetchList: () => Promise<TodoItem[]>;
        create: (item: Omit<TodoItem, 'id'>) => Promise<TodoItem>;
        update: (item: TodoItem) => Promise<TodoItem>;
        delete: (item: TodoItem) => Promise<void>;
    },
}>({
    state: initialState,
});

export const useApi = () => {
    return React.useContext(APIContext);
}
