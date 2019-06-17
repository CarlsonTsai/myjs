let score = Math.random()
let score1 = parseInt(score * 101);
document.write(parseInt(score * 101)); //101 是從 0 - 100 共101個數字  如果後面+1就是位移 1-99

if (score1 >= 80) {

    document.write('A');

} else if (score1 >= 70) {

    document.write('B');
    score1 = 50;          //如果到成績B 之後把成績改 50 不會在印出D
                         // 區塊結束就跳出判斷了
} else if (score1 >= 60) {

    document.write('C');
    
} else {

    document.write('D');

}