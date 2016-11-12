import express from 'express';
import cors from 'cors';

const app = express();
function url(url){
	const reg= new RegExp('@?(https?:)?(\/\/)?((telegram|vk|vkontaktr)[^\/]*\/)?([a-zA-Z0-9]*)','i');
	const username=url.match(reg);
	name=(username)?("@"+username):'Invalid username';
	return name;
}

app.get('/2C',(reg,res) => {
	const name = url(reg.query.username);
	res.json({
		url:reg.query.username,
	    name,
	});
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
