function Part1(arr) {
    output = 0
    console.log(arr.length)
    for (let i = 0; i < arr.length; ++i) {
        output += Math.floor(arr[i]/3) - 2
    }
    console.log("Part 1: " + output)
}  

function Part2(arr) {
    output = 0
    for (let i = 0; i < arr.length; ++i) {
        let n = arr[i]
        let loop = true
        while (loop) {
            n = Math.floor(n/3) - 2
            if (n > 0) {
                output += n
            } else {
                loop = false
            }
        }
    }
    console.log("Part 2: " + output)
}


const fs = require('fs');
    
fs.readFile('Day1Input.txt', (err, data) => {
    if (err) throw err;
    let input = data.toString().split("\n")
    Part1(input)
    Part2(input)
});
