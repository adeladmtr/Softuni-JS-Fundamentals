function solve(input) {
    let users = {};
    for (const line of input) {
        if (line.includes('Statistics')) {
            break;
        }
        let command = line.split('->');
        let action = command.shift();
        switch (action) {
            case 'Add':
                let name = command[0];
                if (!users.hasOwnProperty(name)) {
                    users[name] = {
                        'mails': []
                    }
                } else {
                    console.log(`${name} is already registered`);
                }
                break;
            case 'Send':
                let [sendName, sentMail] = command;
                users[sendName]['mails'].push(sentMail)

                break;
            case 'Delete':
                let removedName = command[0];
                if (users.hasOwnProperty(removedName)) {
                    delete users[removedName];
                } else {
                    console.log(`${removedName} not found!`);
                }
                break;
            default:
                break;
        }
    }
    let sorted = Object.keys(users).sort((a, b) => users[b]['mails'].length - users[a]['mails'].length || a.localeCompare(b))
    console.log(`Users count: ${sorted.length}`);
    for (const element of sorted) {
        console.log(`${element}`);
        let sentmails = users[element]['mails']
        for (const mail of sentmails) {
            console.log(` - ${mail}` );
        }
    }
}