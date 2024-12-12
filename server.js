require('dotenv').config()
const mongoose = require("mongoose")
const app = require("./src/app")

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("DB Connection Successful!")
  })
  .catch(error => {
    console.log(error, "err")
  })

app.listen(4000, console.log("Server is listening on 4000"))