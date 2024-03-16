const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 5000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.render('signup'); // Render the signup.ejs file
});
const upload = multer({ dest: 'uploads/' });

// Route handler for submitting registration form
app.post('/submitRegistration', upload.single('adhaarPdf'), async (req, res) => {
    const { name, adhaar, wallet, location, userType, username, password } = req.body;
    const adhaarPdf = req.file; // Contains information about the uploaded file

    // Process form data as needed
    console.log('Name:', name);
    console.log('Adhaar Number:', adhaar);
    console.log('Wallet Address:', wallet);
    console.log('Location:', location);
    console.log('User Type:', userType);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Adhaar PDF:', adhaarPdf);

    // Upload form data to IPFS
    const formData = {
        name,
        adhaar,
        wallet,
        location,
        userType,
        username,
        password
    };


        // Render different templates based on user type
        if (userType === 'voter') {
            res.render("voter.ejs");
        } else if (userType === 'organization') {
            res.render("index.ejs");
        } else {
            // Handle invalid user type
            res.status(400).send('Invalid user type');
        }
});



//initial page
app.get("/pollcreation", (req, res) => {
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


