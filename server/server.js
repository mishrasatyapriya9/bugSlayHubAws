import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from MERN stack!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
