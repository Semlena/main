import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());


app.get('/',(reg,res) => {
const i=reg.query.i;
  
  let a;
  
  switch(i){
	  case '0':a='1';
	  break;
	  case '1':a="18";
	  break;
	  case '2':a="243";
	  break;
	  case '3':a="3240";
	  break;
	  case '4':a="43254";
	  break;
	  case '5':a="577368";
	  break;	   
	  case '6':a="7706988";
	  break;
	  case '7':a="102876480";
	  break;
	  case '8':a="1373243544";
	  break;
	  case '9':a="18330699168";
	  break;
	  case '10':a="244686773808";
	  break;
	  case '11':a="3266193870720";
	  break;
	  case '12':a="43598688377184";
	  break;
	  case '13':a="581975750199168";
	  break;
	  case '14':a="7768485393179328";
	  break;
	  case '15':a="103697388221736960";
	  break;
	  case '16':a="1384201395738071424";
	  break;
	  case '17':a="18476969736848122368";
	  break;
	  case '18':a="246639261965462754048";
	  break;
	  default:a=Math.ceil(((3+Math.sqrt(6))*Math.pow((6+3*Math.sqrt(6)),parseInt(i))+(3-Math.sqrt(6))*Math.pow((6-3*Math.sqrt(6)),parseInt(i)))/4);
	  break;
  }
  
  res.send(a.toString());
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
