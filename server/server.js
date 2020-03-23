const express = require("express");
const cors = require("cors");
const port = 8000;
const db_name = "petshelterDB"
const app = express();

app.use(cors());
app.use(express.json());

require("./config/mongoose")(db_name);
require("./routes/Pets.routes")(app);


app.listen(port, ()=> console.log(`Listening on port ${port}`))