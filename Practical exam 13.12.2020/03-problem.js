function solve(arr) {
    let record = {
    }

    for (const line of arr) {
        if (line.includes('New follower')) {
            let currentFollower = {}
            let username = line.substring(14)
            currentFollower.name = username
            if (!record.hasOwnProperty(username)) {
                record.push(currentFollower)
            }
console.log(record);
        } else if (line.includes('Like')) {

        }
    }

}

solve(['New follower: george',
    'Like: george: 5',
    'Comment: george',
    'New follower: george',
    'New follower: john',
    'Comment: george',
    'Comment: john',
    'Comment: peter',
    'Log out'])
