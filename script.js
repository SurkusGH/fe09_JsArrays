let fruits = ["Apple", "Orange", "Plum"]
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

//Pop - panaikina paskutinį arr[] elementą;
console.log("---")
console.log("pop:")
fruits.pop();
console.log(fruits)
//Push - prideda į arr[] galą;
console.log("---")
console.log("push(Banana)")
fruits.push("Banana");
console.log(fruits)

//Shift - panaikina iš arr[] pradžios elementą;
console.log("---")
console.log("shift")
fruits.shift();
console.log(fruits)

//Unshift - prideda į arr[] pradžią;
console.log("---")
console.log("unshit(Brocolli))")
fruits.unshift();
console.log(fruits)

//shift and unshift elementai veikia lėtai;

///
/// Asignment_01
///
console.log("Asignment_01")

const p = document.querySelector(".array")
let input = document.querySelector("#input")

const pop = document.querySelector("#Button1")
const push = document.querySelector("#Button2")
const shift = document.querySelector("#Button3")
const unshift = document.querySelector("#Button4")

let array = ["Apple", "Orange", "Plum", "Brocolli"];
console.log(array)
p.textContent = array

//Pop - panaikina paskutinį arr[] elementą;
pop.addEventListener('click', ()=> {
    array.pop()
    p.textContent = array
    console.log(array)
})
//Push - prideda į arr[] galą;
push.addEventListener('click', ()=> {
    array.push(input.value)
    p.textContent = array
    console.log(array)
})
//Shift - panaikina iš arr[] pradžios elementą;
shift.addEventListener('click', ()=> {
    array.shift()
    p.textContent = array
    console.log(array)
})
//Unshift - prideda į arr[] pradžią;
unshift.addEventListener('click', ()=> {
    array.unshift(input.value)
    p.textContent = array
    console.log(array)
})

///
/// Asignment_02
///