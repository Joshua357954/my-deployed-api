const express = require('express');

const persons=require("./api/people");

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/people",persons)


const port = process.env.PORT || 4800;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));