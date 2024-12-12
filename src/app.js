const express = require("express")
const cors = require("cors")
const Api = require("./api/index")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api", Api)
// app.post('/', async (req, res) => {
//   const result = await prisma.user.create({
//     data: { name: req.body.name, email: req.body.email },
//   });
//   res.json(result);
// });

module.exports = app
