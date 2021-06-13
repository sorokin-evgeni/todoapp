import React from 'react';
import {TodoItem} from '../../model/todo';
import {Button, List} from 'antd';
import './Todo.less';
import {Item} from './Item';

interface ItemsViewProps {
    items: TodoItem[];
    onAdd: () => void;
}

export const ItemsView: React.FC<ItemsViewProps> = ({items, onAdd}) => (
    <div className="todo">
        <h2>
            Items to do
            <Button
                onClick={onAdd}
                size="small"
                type="primary"
            >Add</Button>
        </h2>
        <List
            dataSource={items}
            renderItem={(item) => <Item item={item} key={item.id}/>}
            bordered
        />
    </div>
)
