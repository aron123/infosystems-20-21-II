import express from 'express';
import bodyParser from 'body-parser';
import { getRouter } from './routes';

const app = express();

app.get('/api/greet', (req, res) => {
    res.json({ text: 'Hello World' });
});

app.get('/api/greet/:name', (req, res) => {
    const name = req.params.name;

    res.json({
        hu: 'Szia, ' + name,
        en: 'Hello, ' + name
    });
});

app.use(bodyParser.json());
app.use('/api', getRouter());

app.listen(3000, () => {
    console.log('Listening on 3000 ...');
});
