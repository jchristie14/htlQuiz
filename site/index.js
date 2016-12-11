var express=require('express');

var app=express();

var handlebars=require('express-handlebars').create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.set('port', process.env.PORT || 3000)

app.get('/', function(req, res){
	//console.log(req);
	res.render('home');
});

app.get('/question1', function(req, res){
	console.log(req.headers);
	res.render('question1');
});

app.get('/question2', function(req, res){
	res.render('question2');
});

app.get('/question3', function(req, res){
	res.render('question3');
});

//app.get('/public/images/')

// custom 404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

//custom 500 page
app.use(function(err,req,res,next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:'+app.get('port')+'; press Ctrl-C to terminate.');
});