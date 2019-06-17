let var1 = 10 , var2 = 3;
let var3 = var1 / var2;
document.write(`${var1}/${var2}=${var3}`);

var show = document.getElementById('show')

function eq(){
    let x = document.getElementById('x').value
    let y = document.getElementById('y').value
    let tot = `${parseInt(x/y)} ....${x%y}`
    show.innerHTML = tot
}
