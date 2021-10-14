function magicCards(arr) {

    let sequence = arr.shift().split(':')
    let command = arr.shift()

    function isValidCard(card, input) {
        if (input.indexOf(card) >= 0) {
            return true
        } else return false
    }

    function isValidIndex(index, input) {
        if (index >= 0 && index <= input.length) {
            return true
        } else return false
    }
    function swap(card1, card2, input) {
        let x = input.indexOf(card1)
        let y = input.indexOf(card2)
        input[x] = card2
        input[y] = card1
        return input
    }
    let newSequence = []
    while (command !== 'Ready') {
        command = command.split(' ')
        switch (command[0]) {
            case 'Add':
                let cardNameAdd = command[1]
                if (isValidCard(cardNameAdd, sequence)){
                    newSequence.push(cardNameAdd)
                } else console.log('Card not found.')
                break
            case 'Insert':
                let cardNameInsert = command[1]
                let newIndex = Number(command[2])
                if (isValidCard(cardNameInsert, sequence) && isValidIndex(newIndex, newSequence)){
                    newSequence.splice(newIndex, 0, cardNameInsert)
                } else console.log('Error!')
                break
            case 'Remove':
                let cardNameRemove = command[1]
                if (isValidCard(cardNameRemove, newSequence)){
                    let cardIndex = newSequence.indexOf(cardNameRemove)
                    newSequence.splice(cardIndex, 1)
                } else console.log('Card not found.')
                break
            case 'Swap':
                let cardOne = command[1]
                let cardTwo = command[2]
                swap(cardOne, cardTwo, newSequence)
                break

            case 'Shuffle':
                newSequence.reverse()
                break
        }

        command = arr.shift()
    }
    console.log(newSequence.join(' '))
}

magicCards((["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
"Add Pop",
"Add Exodia",
"Add Aso",
"Remove Wrath",
"Add SineokBqlDrakon",
"Shuffle deck",
"Insert Pesho 0",
"Ready"]))
