import express, {Express, Request, Response} from "express";
import { createUser } from "./services/users";
import { getAllUsers } from "./services/users";
import { usersRouter } from "./routes/users";
const app = express();


app.use('/users', usersRouter);


app.listen(3000, () => {
    console.log('now listening on port 3000')
});