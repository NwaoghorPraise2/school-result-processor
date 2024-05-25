import express, {Application, Response, Request} from 'express';
import morgan from 'morgan';
import db from './config/db';

const app: Application = express();


app.use(morgan('dev'));

app.get('/', async (req: Request, res: Response) => {

    const posts = await db.post.findMany({where: { publishedAt: {not: null}}})
    res.json({
        statusCode: 200,
        message: "Good",
        data: {
            posts
        }
    })
});


const port: number = Number(process.env.PORT || 3000);
app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on http://localhost:${port}`);
    console.log(process.env.DATABASE_URL);
});