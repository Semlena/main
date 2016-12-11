import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

function user(name){
	
	const name_rep=name.replace(/\s/ig, ',');
    const name_array=name_rep.split(',');
    const length=name_array.length;
	const user_name=(length==3)?(name_array[2]+" "+name_array[0][0]+"."+" "+name_array[1][0]+"."):(" ");
    const user_name1=(length==2)?(name_array[1]+" "+name_array[0][0]+"."):(" ");
	const user_name2=(length==1)?(name_array[0]+" "):(" ");
	const user=user_name+user_name1+user_name2;
	const res=(user=="   ")?("Invalid fullname"):user.toString();
	return res.trim();
}

app.get('/2B',(reg,res) => {
	const name = reg.query.fullname;
	const username=(name)?user(name):'Invalid fullname';
	res.send(username);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
