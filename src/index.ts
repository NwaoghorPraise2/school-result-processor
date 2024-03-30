import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({message: "Hi. testing things"});
});

const port = Number(process.env.PORT || 3000);
app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on http://localhost:${port}`);
});