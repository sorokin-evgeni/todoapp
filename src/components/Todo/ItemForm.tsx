import React from 'react';
import {TodoItem} from '../../model/todo';
import {rootClass} from './itemViewStyles';
import {Button, Col, Input, Row} from 'antd';

interface ItemFormProps {
    item?: TodoItem;
    onSubmit: (item: TodoItem) => Promise<unknown>;
    onCancel: () => void;
}

export const ItemForm: React.FC<ItemFormProps> = ({item, onCancel, onSubmit}) => {
    const [name, setName] = React.useState(item ? item.name : '');

    return (
        <div className={rootClass}>
            <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <Button
                onClick={onCancel}
                size="middle"
            >Cancel</Button>
            <Button
                onClick={() => {
                    onSubmit({
                        ...item,
                        name
                    })
                }}
                size="middle"
                type="primary"
            >Save</Button>
        </div>
    )
}
