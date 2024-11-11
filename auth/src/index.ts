// src/index.ts

import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// Ensure `errorHandler` is recognized as an error-handling middleware
app.use(errorHandler as (err: Error, req: Request, res: Response, next: NextFunction) => void);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
