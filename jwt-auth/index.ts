const express = require("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/ts-server",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("DB Connected!")
})

const app = express();
const PORT = 8000;

app.get('/', (req,res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});