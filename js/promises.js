// function userName() {
//     fetch(url, {headers: {'Authorization': 'token'+GIT_HUB_KEY}})
//
// }

(() => {
const userLastCommit = (user) => {
    return fetch(`https://api.github.com/users/${user}/events`, {headers:{'Authorization': `token ${GIT_HUB_KEY}`}})
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            for (let event of data) {
                if(event.type === "PushEvent") {
                    console.log(new Date(event.created_at));
                    break;
                }
                // console.log(1)
        }
});
}

userLastCommit("juanlongoria");


//

// const wait = ms => new Promise(resolve => {
//     setTimeout(resolve, ms);
// });



const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`You'll see this after ${ms/1000} second(s).`);
        }, ms);
    })
}

wait(1000).then(message => console.log(message));
wait(3000).then(message => console.log(message));
wait(5000).then(message => console.log(message));

})();


// setTimeout(()=> {
//
//
//     console.log('You\'ll see this after 1 second');
// }, 1000);
//
// setTimeout(()=> {
//
//
//     console.log('You\'ll see this after 3 second');
// }, 3000);