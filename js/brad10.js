let month = parseInt(Math.random()*12+1)
document.write(month + '<br>')
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        document.write('31')
        break;
    case 4: case 6: case 9: case 11:
        document.write('30')
        break;
    case 2:
        document.write('28')
        break;
    default:
        document.write('EERO')
        break;
}