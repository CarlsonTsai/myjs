
let var1 = 10, var2 = 3;
let var3 = var1 / var2;
document.write(`${var1}/${var2}=${var3}`);

var show = document.getElementById('show')

function eq() {
    let op = document.getElementById('op');
    let opVal = op.selectedIndex;
    let x = document.getElementById('x').value
    let y = document.getElementById('y').value
    let nx =  parseInt(x)
    let ny = parseInt(y)

    let tot 

    switch (opVal) {
        case 0:
            tot = nx + ny
            show.innerHTML = tot
            break;
        case 1:
            tot = parseInt(x - y)
            show.innerHTML = tot
            break;
        case 2:
            tot = parseInt(x * y)
            show.innerHTML = tot
            break;
        case 3:
            tot =  `${parseInt(x/y)} ....${x%y}`
            show.innerHTML = tot
            break;
    }
     
}


	