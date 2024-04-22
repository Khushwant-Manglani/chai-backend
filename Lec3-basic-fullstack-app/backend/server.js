import express from "express";
import { configDotenv } from "dotenv";
// import cors from "cors";

const app = express();
configDotenv();

// const corsOptions = {
//   origin: "http://localhost:5173"
// }

// app.use(cors(corsOptions));

const port = process.env.PORT || 5000;

const jokes = [
  {
    id: 1,
    title: "First Joke",
    description: "This is the first joke"
  }, 
  {
    id: 2,
    title: "Second Joke",
    description: "This is the second joke"
  },
  {
    id: 3,
    title: "Third Joke",
    description: "This is the third joke"
  },
  {
    id: 4,
    title: "Fourth Joke",
    description: "This is the fourth joke"
  },
  {
    id: 5,
    title: "Fifth Joke",
    description: "This is the fifth joke"
  }
];

app.get('/api/jokes', (req, res) => {
  res.send(jokes);
})

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
})