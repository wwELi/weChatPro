var fs = require('fs');
fs.readFile('content.txt',function(error,data){
   if(error){
   	console.log(error);
   }else{
   	console.log(data)
   }
});
fs.open('content.txt','r+',function(err,data){
	if (err) {
console.error(err);
return;
}
})