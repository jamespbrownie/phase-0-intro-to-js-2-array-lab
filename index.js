// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
];

function destructivelyAppendCat(name) {
    cats.push(name)    
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const appendNewCat = [...cats, name]
    return appendNewCat
} 

function prependCat(name) {
    const prependNewCat = [name, ...cats]
    return prependNewCat
} 

function removeLastCat() {
    const oneLessCat = [...cats]
    oneLessCat.splice(2,1)
    return oneLessCat
}


function removeFirstCat() {
    const oneLessCat2 = [...cats]
    oneLessCat2.splice(0,1)
    return oneLessCat2
}