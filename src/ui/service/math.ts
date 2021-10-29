import {tojson} from './utils';

export const calcMath = (data: {root: string}) => {
    return fetch('/api/math/factorial', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(tojson)
}
