
const list = [1721, 979, 366, 299, 675, 1456];
let result;
    

list.forEach(num1=>{
    list.forEach(num2=>{
        list.forEach(num3=>{
            if(num1+num2+num3===2020){
                result=num1*num2*num3;
            }
        })
    })
})

console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);