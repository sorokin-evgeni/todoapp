import React from 'react';
import {TodoItem} from '../../model/todo';
import {rootClass} from './itemViewStyles';
import {Button} from 'antd';

interface ItemViewProps {
    item: TodoItem;
    onEdit: () => void;
    onDelete: () => void;
}

export const ItemView: React.FC<ItemViewProps> = ({item, onEdit, onDelete}) => {
    return (
        <div className={rootClass}>
            <div className="item-name">{item.name}</div>
            <Button size="middle" onClick={onEdit}>Edit</Button>
            <Button size="middle" onClick={onDelete} danger>Delete</Button>
        </div>
    )
}
