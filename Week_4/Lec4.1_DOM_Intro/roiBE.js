const express = require("express");
const cors =require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3014)


app.get("/interest", (req, res) => {

    const p = req.query.p
    const r = req.query.r
    const t = req.query.t
   console.log(p, r, t)
    if(!p || !r || !t){
        return res.status(400).send("all p, r, t values are required")
    }

    const nP = parseInt(p)
    const nR = parseInt(r)
    const nT = parseInt(t)
    if(isNaN(nP) || isNaN(nR) || isNaN(nT)) {
        return res.status(400).send("Invalide numeric values either of nP,nR,nT or both")
    }

    const roi = (nP*nR*nT)/100;
    res.setHeader("Content-Type", "text/plain");
    return res.json(`${roi}`)
})