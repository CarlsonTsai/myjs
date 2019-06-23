    // obj = {
    //     name:'brad',
    //     age:'18',
    // }

    // document.write(`${obj.name} : ${obj.age} <br>`)

    // let obj1 = new Object();
    // document.write(`${obj1.name} : ${obj1.age} <br>`)

    // for(let attr in obj){
    //     obj1[attr] = obj[attr];
    // }
    // document.write(`${obj1.name} : ${obj1.age} <br>`)



    function clone(source){
        if(source == null ||typeof(source) != 'object') return null;

        let target = new Object();

        for(let attr in source){
            if(typeof source[attr] != 'object'){
                target[attr] = source[attr];
            }else{
                target[attr] = clone(source[attr]);
            }       
        }
        return target;
    }



