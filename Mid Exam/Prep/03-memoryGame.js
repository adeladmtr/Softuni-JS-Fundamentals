function memoryGame(arr) {

    let sequence = arr.shift().split(' ')
    let move = arr.shift()
    let moves = 0

    while (move !== 'end') {
        moves++
        let [x, y] = move.split(' ').map(Number)
        if (x == y || x < 0 || y < 0
            || x >= sequence.length
            || y >= sequence.length) {
            let element = `-${moves}a`
            sequence.splice(sequence.length / 2, 0, element, element)
            console.log('Invalid input! Adding additional elements to the board')
        }
       else if (sequence[x] == sequence[y]) {
            let element = sequence[x]
            sequence.splice(x, 1)
            let index = sequence.indexOf(element)
            sequence.splice(index, 1)
            console.log(`Congrats! You have found matching elements - ${element}!`)
            
        } else {
            console.log('Try again!')
        }
        if (sequence.length == 0){
            console.log(`You have won in ${moves} turns!`);
            break
        }

        move = arr.shift()
    }
    

    if (sequence.length > 0){
        console.log(`Sorry you lose :(\n${sequence.join(' ')}`)
    }
}

memoryGame([
    '1 1 2 2 3 3 4 4 5 5',
'1 0',
'-1 0',
'1 0' ,
'1 0' ,
'1 0' ,
'end'
])