
## Form Validation
- [LIVE 🌐](https://apsarabishwokarma.github.io/Javascript-snippet/form)


  ## Form Validation
- [LIVE 🌐](https://apsarabishwokarma.github.io/Javascript-snippet/meeting-resevation)


```js









//date format
const input = "1st Apr 2021"

// const year = input.slice(9);
// const month = input.slice(5,8);
// const day = input.slice(0,2);
// const output =`${year}-${month}-${day}`

// console.log(output);


const days = ['1st','2nd']
const months = ['Apr','May']
const years = [2021,2022]

const inputs = input.split(" "); // ["1st", "Apr", "2021"]

const year = inputs.find(p=>years.includes(parseInt(p)))
const month = inputs.find(p=>months.includes(p))
const day = inputs.find(p=>days.includes(p))

let _year;
for (let i = 0; i< inputs.length; i++){
    const p = parseInt(inputs[i]);
    for (let j = 0; j < years.length; j++){
        if(years[j] === p){
            _year = p;
            break;
        }
    }
}

console.log(`${year}-${month}-${day}`)
console.log(_year)

output
2021-Apr-1st
2021
```
