
const passwordList = [
    { times: '1-3', letter: 'a', password: 'abcde'},
    { times: '1-3', letter: 'b', password: 'cdefg'},
    { times: '2-9', letter: 'c', password: 'ccccccccc'}
];

const validPassword = (letter,times,password)=>{
    const[min,max] = times.split('-').map(Number);
    let countOfLetter=0;
    
    password.split('').forEach(eachLetter=>{
        if(eachLetter===letter){
            countOfLetter++;
        }
    })

    if(countOfLetter>=min && countOfLetter<=max){
        return 'Valid password.'
    }else{
        return 'Invalid password.';
    }

}

for(let each of passwordList){
    console.log(validPassword(each.letter,each.times,each.password));
}