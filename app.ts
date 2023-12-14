import express, {Express, Request, Response} from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("detka ty lubish rvanye djinsy");
});

app.get("/da", (req, res) => {
    res.send("ya debil da da da, no takih kak ya dohuya");
});

app.listen(3000, () => {
    console.log('now listening on port 3000')
});