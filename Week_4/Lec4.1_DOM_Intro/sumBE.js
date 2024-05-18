const express = require("express");
const cors =require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3013)


app.get("/sum", (req, res) => {

    const a = req.query.a
    const b = req.query.b
    if(!a || !b){
        return res.status(400).send("Both a and b values are required")
    }

    const num1 = parseInt(a)
    const num2 = parseInt(b)
    if(isNaN(num1) || isNaN(num2)) {
        return res.status(400).send("Invalide numeric values either of a or b or both")
    }

    const sum = num1 + num2
   // res.setHeader("Content-Type", "text/plain");
    return res.json(`${sum}`)
})