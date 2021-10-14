function passwordValidator(pass) {

    function isLengthValid(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true
        } else return 'Password must be between 6 and 10 characters'
    }
    
    function isCharValid(pass) {
        let isValidPass = true

        for (let i = 0; i < pass.length; i++) {
            isValid = true
            let code = pass[i].charCodeAt()
            if (code >= 65 && code <= 90 ||
                code >= 97 && code <= 122 ||
                code >= 48 && code <= 57) {
                isValid
            } else {
                isValid = false
                isValidPass = false
                break
            }
        }
        return isValidPass ? true : 'Password must consist only of letters and digits'
    }
    
    function atLeastTwoDigits(pass) {
        let digits = 0
        for (let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt(0)
            if (code >= 48 && code <= 57) {
                digits++
            }
        }
        return digits >= 2 ? true : 'Password must have at least 2 digits'
    }


    let result = []

    if (isLengthValid(pass) !== true) {
        result.push(isLengthValid(pass))
    }
    if (isCharValid(pass) !== true) {
        result.push(isCharValid(pass))
    }
    if (atLeastTwoDigits(pass) !== true) {
        result.push(atLeastTwoDigits(pass))
    }
    if (isLengthValid(pass) === true && isCharValid(pass) === true && atLeastTwoDigits(pass) === true) {
        result.push(`Password is valid`)
    }
    return result.join('\n')
}

console.log(passwordValidator('logIn'));