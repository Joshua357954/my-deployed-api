const express = require("express");
const app = express();

const people = require("./api/people");

app.use(express.json({ extended: false }));

app.use("/pe", people);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
