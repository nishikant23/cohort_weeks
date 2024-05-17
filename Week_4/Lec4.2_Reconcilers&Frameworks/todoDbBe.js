const express = require("express")

const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())


app.get("/todos", async (req, res) =>{
    const resp = await fetch("https://sum-server.100xdevs.com/todos")
    const data = await resp.json()
    res.json(`${data}`);
})

app.listen(3020)