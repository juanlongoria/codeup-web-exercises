function userName() {
    fetch(url, {headers: {'Authorization': 'token'+GIT_HUB_KEY}})

}



setTimeout(()=> {


    console.log('You\'ll see this after 1 second');
}, 1000);

setTimeout(()=> {


    console.log('You\'ll see this after 3 second');
}, 3000);