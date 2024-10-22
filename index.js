import express from 'express';
import dotenv from 'dotenv';
import saveMessageRouter from './routes/portfolio.routes.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
app.use(express.json());

app.use("/api", saveMessageRouter);

app.listen(port, () => {
    console.log('Server started on port ', port);
});