import express, {Express, Request, Response} from "express";
import { createUser } from "./services/users/createUser";
import { getAllUsers } from "./services/users/getAllUsers";
const app = express();

const userRoute = require("./routes/users");


app.listen(3000, () => {
    console.log('now listening on port 3000')
});