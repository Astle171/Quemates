const express = require("express");
const app = express();
const mongoose= require("mongoose");
const dotenv= require("dotenv");
const helmet= require("helmet");
const morgan= require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");

dotenv.config();


//connecting to mongodb
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );
  app.use("/images", express.static(path.join(__dirname, "public/images"))); //if images dont request just go to diven directory




app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name); //send name in react application
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });


//used for routing
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);    

// app.get("/",(req,res)=>{
//     res.send("welcome to homepage")
// })

// app.get("/users",(req,res)=>{
//     res.send("welcome to users")
// })



app.listen(8800,()=>{
    console.log("server running");
});