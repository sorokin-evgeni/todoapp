import {Application} from 'express';

const data = []

function factorial(root: number): number {
    let result = 0;
    for (let j = 0; j<10e2; j++) {
        for (let i = 0; i<10e4; i++) {
            if (i%10 === 0) {
                result +=i;
                continue
            };
            if (Math.random() > 0.5) {
                result *= i;
            } else {
                result /=i;
            }
        }
        data.push(result)
    }
    return result;
}

export function mathFactory(app: Application) {
    app.post('/api/math/factorial', (req, res) => {
        const root = isNaN(req.body.root) ? 0 : Number(req.body.root);
        res.json({
            result: factorial(root),
        });
    });
}
