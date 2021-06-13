import React from 'react';
import {fetchList} from '../../service/todo';
import {ItemView} from './ItemView';

interface TodoProps {}

export const Todo: React.FC<TodoProps> = () => {
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        fetchList().then((items) => {
            setItems(items)
        });
    }, [])
    return (
        <div className="todo">
            <h2>Items to do</h2>
            {
                items.map((item) => <ItemView item={item} key={item.id}/>)
            }
        </div>
    )
}
