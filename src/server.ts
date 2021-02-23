import "reflect-metadata"
import express from "express"
import "./database";

const app = express()


app.get("/", (request, response) => {
  return response.json({ message: "Hello World - NLW #4" })
})

app.post("/", (request, response) => {
  return response.json({ message: "The data are saved successfully!" })
})

app.listen(3333, () => console.log("Server is running"))