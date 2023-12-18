import express, {Express, Request, Response} from "express";
import { createUser } from "./services/users/createUser";
import { getAllUsers } from "./services/users/getAllUsers";
const app = express();

app.get("/", (req, res) => {
    res.send(createUser());
});

app.get("/da", (req, res) => {
    res.send(getAllUsers());
});

app.listen(3000, () => {
    console.log('now listening on port 3000')
});