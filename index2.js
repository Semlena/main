import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

function url(url){
	const reg= new RegExp('@?(https?:)?(\/\/)?(www.)?((telegram||vk||vkontakt||twitter)[^\/]*\/)?(@?[a-zA-Z0-9]*\.*\-*)','i');
	const username=url.match(reg);
	const l=username.length-1;
	const u_name=username[l].split("/");
	const user_name=u_name[0];
	const user=user_name.replace(/@/g,"");
	const name=(user)?("@"+user):'Invalid username';
	return name.toString();
}
app.get('/2С',(reg,res) => {
	const name = url(reg.query.username)
	res.send(name);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
