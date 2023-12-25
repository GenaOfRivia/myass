import { createUser } from "../services/users"; 
import { getAllUsers } from "../services/users"; 
import { Express } from "express";

export const usersRouter = express.Router();

router.get("/", (req, res) => {
    res.send(getAllUsers);
});

router.post("/", (req, res) => {
    res.send(createUser);
});

router.get("/:id", (req, res) => {
    res.send("nigga");
});

router.put("/:id", (req, res) => {
    res.send("update nigga");
});

router.delete("/:id", (req, res) => {
    res.send("delete nigga");
});

