// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
});
  
function destructivelyAppendCat(name) {
    return cats.push(name)
}
destructivelyAppendCat('Ralph')


function destructivelyPrependCat(name) {
    return cats.unshift(name)
}
destructivelyAppendCat("Bob") 


function destructivelyRemoveLastCat(name){
    return cats.pop(name)
}
destructivelyRemoveLastCat("Garfield")


function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}
destructivelyRemoveFirstCat("Milo")

function appendCat(name) {
    let newArray = [...cats, name]
    return newArray;
}
appendCat("Broom")


function prependCat(name){
    let newArray = [name, ...cats]
    return newArray;
}
prependCat("Arnold")


function removeLastCat(){
    let newArray = cats.slice(0,-1);
    return newArray;
}
removeLastCat()

function removeFirstCat(){
    let newArray = cats.slice(1);
    return newArray;
}
removeFirstCat()




