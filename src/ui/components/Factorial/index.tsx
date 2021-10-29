import React from 'react';
import {Button, Input} from 'antd';
import './Factorial.less';
import {calcMath} from '../../service/math';

interface FactorialProps {}

export const Factorial: React.FC<FactorialProps> = () => {
    const [value, setValue] = React.useState('10');
    const handleCalculate = React.useCallback(() => {
        calcMath({
            root: value
        }).then((result) => {
            console.log(result);
        });
    }, [value]);
    return (
        <div className="factorial">
            <div className="form">
                <Input
                    value={value}
                    onChange={(event) => setValue(event.target.value ? event.target.value : '')}
                />
                <Button
                    onClick={handleCalculate}
                    size="middle"
                >Calculate</Button>
            </div>
        </div>
    )
}
