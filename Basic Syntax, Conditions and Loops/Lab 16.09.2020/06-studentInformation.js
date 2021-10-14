function studentInformation(name, age, avgGrade) {
    age = Number(age)
    avgGrade = Number(avgGrade)
    console.log(`Name: ${name}, Age: ${age}, Grade: ${avgGrade.toFixed(2)}`)
}
studentInformation("Steve", 16, 2.1426)