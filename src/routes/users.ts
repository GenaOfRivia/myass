import { createUser } from "../services/users"; 
import { getAllUsers } from "../services/users"; 
import express from "express";
export const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
    res.send(getAllUsers);
});

usersRouter.get("/create", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

usersRouter.post("/create", (req, res) => {
    res.send(createUser);
});

usersRouter.get("/:id", (req, res) => {
    res.send("nigga");
});

usersRouter.put("/:id", (req, res) => {
    res.send("update nigga");
});

usersRouter.delete("/:id", (req, res) => {
    res.send("delete nigga");
});

