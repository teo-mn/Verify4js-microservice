const express = require("express")
const { verify } = require('verify4js');
const fs = require('fs')
const multer = require('multer')
require("dotenv").config();
const router = express.Router();

const upload = multer({ dest: 'uploads/' });
  

router.get("/", (req, res) =>{
    res.send("Hello teo ")
})

router.post('/upload', upload.single('file'), (req, res) => {

  const file = req.file;
  const fileBuffer = fs.readFileSync(file.path);     
  const int8Array = new Int8Array(fileBuffer);

  verify(int8Array, process.env.NODE_URL)
  .then((res1) => {
    return  res.status(200).send(res1);
  })
  .catch((err) => {
    // raise
  });

  fs.unlinkSync(file.path);
 
});

// Export the router
module.exports = router;