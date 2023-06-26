const express = require("express")
const router = require("./router/router")
const pdfjs = require('pdfjs-dist'); 
const path = require('path');
const port = 3000;
const app = express();
app.use(express.json());

pdfjs.GlobalWorkerOptions.workerSrc = path.resolve(
  __dirname,
  'node_modules',
  'pdfjs-dist',
  'build',
  'pdf.worker.js'
);


app.listen(port, ()=> { 
    console.log("Server is running");
})

app.use("/", router);