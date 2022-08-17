import express from "express"
import mongoose from "mongoose"
const app = express();

mongoose.connect("mongodb+srv://nemanja:nemanja123@cluster0.8cmlyei.mongodb.net/?retryWrites=true&w=majority").then(() => app.listen(5000)).then(() => console.log("Conected to Database and listening port 5000")).catch((err) => console.log(err))
app.listen(5000)