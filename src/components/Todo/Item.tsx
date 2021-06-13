import React from 'react';
import {TodoItem} from '../../model/todo';
import {ItemForm} from './ItemForm';
import {ItemView} from './ItemView';
import {useApi} from './store';

interface ItemProps {
    item: TodoItem;
}

export const Item: React.FC<ItemProps> = ({item}) => {
    const [isEdit, setIsEdit] = React.useState(false);
    const {api} = useApi();
    const handleSubmit = React.useCallback((item) => {
        return api.update(item).then(() => {
            setIsEdit(false);
        })
    }, []);

    const handleDelete = React.useCallback(() => {
        return api.delete(item);
    }, []);

    return isEdit
        ? <ItemForm onSubmit={handleSubmit} onCancel={() => setIsEdit(false)} item={item}/>
        : <ItemView item={item} onEdit={() => setIsEdit(true)} onDelete={handleDelete}/>
}
