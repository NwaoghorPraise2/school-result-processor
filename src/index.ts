import app from '../app';
import morgan from 'morgan';

app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {

    res.json({message: "Hi"});
});

const port: number = Number(process.env.PORT || 3000);
app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on http://localhost:${port}`);
});