

function eq(){
    let outPut = document.getElementById('outPut').value
    outPut = parseInt(outPut)
    let isOK = true

    if(outPut % 4 == 0 ){
        isOK = true
    }else if(outPut % 100 == 0 ){
        isOK = false
    }else if(outPut % 400 == 0){
        isOK = true
    }else{
        isOK = false
    }
    document.getElementById('re').innerHTML = isOK?'潤':'平'

    
}
