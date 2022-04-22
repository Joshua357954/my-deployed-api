// const express = require('express');

// const persons=require("./api/people");

// const app = express();

// app.use(express.json({ extended: false }));

// app.use("/",persons)


// const port = process.env.PORT || 4800;

// app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));


const express = require("express");
const app = express();
const people = require("./api/people");

app.use(express.json({ extended: false }));

app.use("/", people);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
