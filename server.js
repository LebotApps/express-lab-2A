//require packages 

const express = require(`express`);

//initialize express application

const app = express();

//define server route using greeting

app.get(`/greeting`, (req, res) => {
    res.send("Hello, stranger");
});

//route to Jimmy-boy

app.get('/greeting/Jimmy-boy', (req, res) => {
	console.log(req.params);
	res.send(`Wow! Hello there, Jimmy-boy`);
});

//route to param /:name

app.get('/greeting/:name', (req, res) => {
	console.log(req.params);
	res.send('Whats Up ' + req.params.name + ` ! ` + ` It's so great to see you!`);
});

//route to tip

app.get('/tip/:total/:tipPercentage', (req, res) => {
    
    parseInt = "100";
    parseInt = "20";

    console.log(req.params);
    res.send(req.params.tipPercentage);
});

//Magic Ball route answers set to variable

const ballAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

//index a random answer 

const randomAnswer = ballAnswers[Math.floor(Math.random() * ballAnswers.length)];

//Link HTML file to Express 

app.get('/magic', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

//Return Question and Answer using HTML 

app.get('/myform', function(req, res){  
    var myText = req.query.mytext; //mytext is the name of your input box 
    res.send( `<h1> Your Queston: ${myText} Your Answer: ${randomAnswer} </h1>`);  
});  

app.listen(3000);