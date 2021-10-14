function solve(arr) {
    let baseMessage = arr.shift()
    // console.log(baseMessage);
    let command = arr.shift()
    // console.log(command);

    function replace2(input, a, b) {
        for (let i = 0; i < input.length; i++) {
            input[i] = input[i].replace(a, b)
        }
        return input.join('')
    }
    function cut(input, a, b) {
        if (a >= 0 && a <= input.length && b >= a && b <= input.length) {
            let aBis = input.slice(0, a)
            let bBis = input.slice(b, input.length)
            return aBis.join(bBis)
            // .join('')
        } else return "Invalid indices!"
    }
    while (command !== 'Finish') {

        let message = Array.from(baseMessage)
        command = command.split(' ')
        let char = command.shift()

        if (char == 'Replace') {
            let a = command[0]
            let b = command[1]
            baseMessage = replace2(message, a, b)
            console.log(baseMessage);
        }

        else if (char == 'Cut') {
            let a = Number(command[0])
            let b = Number(command[1])
            baseMessage = cut(message, a, b)
            console.log(baseMessage);


        } else if (char == 'Make') {
            if (command[0] == 'Upper') {
                console.log(baseMessage.toUpperCase())
            } else console.log(baseMessage.toLowerCase())

        } else if (char == 'Check') {

        } else if (char == 'Sum') { }

        command = arr.shift()
    }
}

solve(['ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'])