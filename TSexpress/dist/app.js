"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("detka ty lubish rvanye djinsy");
});
app.get("/da", (req, res) => {
    res.send("ya debil da da da, no takih kak ya dohuya");
});
app.listen(3000, () => {
    console.log('now listening on port 3000');
});
