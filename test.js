var str = "<link href='ther is no apple'> <a href='athul' clas='bla bla bla'> test sfdsfksam <a href='bino'> adfasdkf";


var regex = /ahref=.*?>/g;

var arr = str.match(regex);

var newArray = arr.map( (data) => {
  
   data = data.replace("href=","");
   var index = data.indexOf(" ");
   data = data.slice(0,index);
   console.log(data);
   return data;
});
console.log(newArray);