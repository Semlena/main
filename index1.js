import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());


function sym(name){
    const re=/[0-9]|_|-|%|\/|\}|\,|\"|@/g;
    const symbol=name.match(re);
    const result=(symbol)?true:false;
    return result;
}
function Uppercase(name){
	const re=new RegExp(/[-А-Я]/);
	const S=name.match(re);
	const Symb=(S)?(name):(name.toUpperCase());
	return Symb;
}

function register(name){
	const U=name.substr(0,1);
	const str=name.slice(1);
	const Symb=Uppercase(U);
	const re=new RegExp(/[-А-Я]/);
	const array=str.split(/[\s*]/);
	let nev=[];
	let i;
	for(i=0; i<array.length; i++){
	    const arr=array[i].match(re);
		const sym=(arr)?(array[i].toLowerCase()):(array[i]);
	    nev[nev.length]=sym;
	}
	const nev_string=nev.join(" ");
	const string=Symb+nev_string;
	return string;
}


function user(name){
    const n=name.trim();
    const VRegExp = new RegExp(/(\s{2,})/g); 
    const VResult = n.replace(VRegExp," ");
    const name_rep=VResult.replace(/\s/ig, ',');
    const name_array=name_rep.split(',');
    const length=name_array.length;
    const user_name=(length==3)?(register(name_array[2])+" "+Uppercase(name_array[0][0])+"."+" "+Uppercase(name_array[1][0])+"."):(" ");
    const user_name1=(length==2)?(register(name_array[1])+" "+Uppercase(name_array[0][0])+"."):(" ");
    const user_name2=(length==1)?(register(name_array[0])+" "):(" ");
    const user=user_name+user_name1+user_name2;
    const res=(user=="   ")?("Invalid fullname"):user.toString();
    return res.trim();
}

app.get('/2B',(reg,res) => {
    const name = reg.query.fullname;
    const symbol=sym(name);
    const username=((name)&&(!symbol))?user(name):'Invalid fullname';
    res.send(username);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
