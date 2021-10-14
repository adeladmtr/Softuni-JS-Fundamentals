function printCertificate(grade, nameArr) {
    if (pass(grade)) {
        printHeader()
        printName(nameArr)
        formatGrade(grade)

    } else {
        console.log(`${nameArr[0]} ${nameArr[1]} does not qualify.`)
    }

    function printHeader() {
        console.log('~~~~~~@~~~~~~')
        console.log('~~~~Certificate~~~~')
        console.log('~~~~~~~~~~~~~~~~~~~~')
    }
    function pass(grade) {
        return grade >= 3
    }
    function printName(nameArr) {
        console.log(`${nameArr[0]} ${nameArr[1]}`)
    }
    function formatGrade(grade) {
        if (grade < 3) {
            console.log(`Fail (${(2.00)})`)
        } else if (grade >= 3 && grade < 3.5) {
            console.log(`Poor (${grade.toFixed(2)})`)
        } else if (grade < 4.5) {
            console.log(`Good (${grade.toFixed(2)})`)
        } else if (grade < 5.5) {
            console.log(`Very good (${grade.toFixed(2)})`)
        }
        else {

            console.log(`Excellent (${grade.toFixed(2)})`)
        }
    }

}

printCertificate (4.9, ['John', 'Smith'])
