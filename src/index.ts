import express, {Application, Response, Request} from 'express';
import morgan from 'morgan';

const app: Application = express();
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
    res.json({message: "Hi. testing things"});
});

const port: number = Number(process.env.PORT || 3000);
app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on http://localhost:${port}`);
});