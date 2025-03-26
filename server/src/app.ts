import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRoutes from './modules/products/routes/product.route';

const app: Application = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Access-Control-Allow-Headers',
        ],
    })
);

app.use(express.json());

// Routes
app.use(productRoutes);

app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to back test for TuArmi.' });
});

export default app;
