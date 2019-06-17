// 合法變數 [a-z A-Z $_][a-z A-Z 0-9 $_]

let var1;
document.write(var1 + "<br>" + '宣告變數但尚未給值，所以undefined'+ "<br>");
let var2 = 123;
document.write(typeof(var2) + "<br>");
let var3 = 12.3;
document.write(typeof(var3) + "<br>");
let var4 = true;
document.write(typeof(var4) + "<br>");
let var5 = 'brad';
document.write(typeof(var5) + "<br>");

const name  = 'Brad';  // 常數不能變更值，並且要開始就給初始值
document.write('my name is ' + name +"<br>")
document.write(`my name is ${name} <br>`)
let a = 10 , b = 3;
document.write(`${a}+${b}=${a+b}`)

