import React from 'react';
import {TodoItem} from '../../model/todo';

interface ItemViewProps {
    item: TodoItem;
}

export const ItemView: React.FC<ItemViewProps> = ({item}) => {
    return (
        <div>{item.name}</div>
    )
}
