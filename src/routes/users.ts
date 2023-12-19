import { createUser } from "../services/users/createUser";
import { getAllUsers } from "../services/users/getAllUsers";

const express = require("express");
const router = express.Router();

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

module.exports = router;