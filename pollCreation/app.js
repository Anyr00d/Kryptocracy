import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


//initial page
app.get("/", (req, res) => {
  res.render("index.ejs");
});


//step-2 in creating a poll
app.post("/create", (req, res) => {
  let pollName = req.body.pollName;
  let options = req.body.options;
  res.render("create.ejs", { pollName, options });
});


//showing a poll after it is created
app.post("/pollcreated", (req, res) => {
  console.log(req.body.pollName);
  console.log("These are the options:");
  for(let i=0;i<req.body.options;i++){
    console.log(req.body.options_val[i]);
  }
  res.render("poll.ejs",{
    pollName: req.body.pollName,
    options_val: req.body.options_val  
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


