function solve(arr) {
    let heroes = {}

    let line = arr.shift()
    while (line != `End`) {
        let lineArr = line.split(' ')
        let command = lineArr.shift()
        switch (command) {
            case `Enroll`:
                let name = lineArr.shift()
                if (!heroes.hasOwnProperty(name)) {
                    heroes[name] = {
                        'spells': []
                    }
                } else {
                    console.log(`${name} is already enrolled.`)
                }
                break
            case `Learn`:
                let [heroName, spell] = lineArr
                if (!heroes.hasOwnProperty(heroName)){
                    console.log(`${heroName} doesn't exist.`);
                } 
                    
                break
            case `Unlearn`:
                break
        }
        line = arr.shift()
    }

}

solve(["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"])


