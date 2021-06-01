//require packages 

const express = require(`express`);

//initialize express application

const app = express();

//define server route using greeting

app.get(`/greeting`, (req, res) => {
    res.send("Hello, stranger");
});

//route to param /:name

app.get('/greeting/:name', (req, res) => {
	console.log(req.params);
	res.send('Whats Up ' + req.params.name + ` ! ` + ` It's so great to see you!`);
});

app.listen(3000);