function solve(arr) {
    let skill = arr.shift()
    let line = arr.shift()


    while (line != 'For Azeroth') {
        let lineArr = line.split(' ')
        let command = lineArr.shift()
        switch (command) {
            case `GladiatorStance`:
                skill = skill.toUpperCase()
                console.log(skill)
                break
            case `DefensiveStance`:
                skill = skill.toLowerCase()
                console.log(skill);
                break
            case `Dispel`:
                let index = Number(lineArr[0])
                let letter = lineArr[1]

                function replace(text, index, character) {
                    let stringArr = Array.from(text)
                    stringArr[index] = character
                    return stringArr.join('')
                }

                if (index > skill.length-1 || index < 0) {
                    console.log(`Dispel too weak.`);
                } else {
                    skill = replace(skill, index, letter)
                    console.log(`Success!`)
                }
                break
            case `Target`:
                let subCommand = lineArr[0]
                if (subCommand === `Change`) {
                    let subStr1 = lineArr[1]
                    let subStr2 = lineArr[2]

                    skill = skill.split(subStr1).join(subStr2)
                    console.log(skill);
                } else {
                    let subStr = lineArr[1]
                    skill = skill.split(subStr).join("")
                    console.log(skill);
                }
                break
            default: console.log(`Command doesn't exist!`);
        }
        line = arr.shift()
    }
}

solve(["fr1c710nRICTION",
"GladiatorStance",
"Dispel 2 I",
"Dispel 4 T",
"Dispel 6 O",
"Dispel 5 I",
"Dispel 17 I",
"Target Change RICTION riction",
"For Azeroth"])

