import express from "express";
import bodyParser from "body-parser";
import { Console } from "console";
import fs from 'fs-extra';

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let yes_votes=0;
let no_votes=0;

let a={poll1:{name: "CAA Implementation", desc: "Citizenship Amendment Act", options: {option1:["yes",yes_votes], option2: ["no",no_votes], option3:null,option4:null,option5:null},whoVoted:[]}}
let whoVotedArray=a.poll1.whoVoted;

app.get("/", (req, res) => {
  res.render("homepage.ejs")
});


app.post('/account',(req,res)=>{
  const username= req.body.name;
  const walletId=req.body.wallet;
  console.log(username);
  console.log(walletId);
  whoVotedArray.push(walletId);
  console.log(a);
  for(let i=0;i<whoVotedArray.length;i++){
    if(whoVotedArray[i]==walletId){
      res.send("You can't vote");
    }
  }
  res.render("index.ejs")
})


let options_=a.poll1.options;

app.post("/voting",(req,res)=>{
  var vote=req.body.vote;
  if(vote==options_.option1[0]){
    console.log(a.poll1.name)
    console.log("before:" + options_.option1[1])
    options_.option1[1]++;
    console.log("after:" + options_.option1[1]);
  }
  else if(vote==options_.option2[0]){
    console.log("before:" + options_.option2[1])
    options_.option2[1]++;
    console.log("after:" + options_.option2[1])
  }
  res.render("voting.ejs",{
    yes_votes:options_.option1[1],
    no_votes:options_.option2[1]
  });
  var a_new=JSON.stringify(a);
  fs.writeFile('thing.json',a_new,(err) => {
    if(err){
      console.error("error", err);
      return;
    }
    console.log("saved");
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

