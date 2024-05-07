// Code your solutions in this file
const writeCards = (names) => {
    let thankYous = [];
    for (name in names) {
        thankYous.push(`Thank you, ${names[name]}, for the wonderful surprise gift!`)
    }
    return thankYous
}

const countDown = (x) => {
    while (x >= 0) {
        console.log(x)
        --x
    }

}