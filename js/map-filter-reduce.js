const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//2.
let threeLanguages = users.filter((languages)=> language.languages.length > 2);
console.log(threeLanguages);

//3.
let emails = users.map(user =>user.email);

console.log(emails)

//4.
let totalYears = users.reduce((totalYears, user)=>{
    return totalYears + user.yearOfExperience;}, 0);
//4. part 2
console.log(totalYears)
let avgExp = totalYears/user.length;
console.log(avgExp);

//5.
let longestEmail = users.reduce((startlength, addLetter)=> start.length.email.length> addLetter.email.length? startLength : addLetter);
console.log(longestEamil);

let longestEmail= users.reduce((startLength,addLetter)=>{
    if(startLength.email.length>addLetter.email.length){
        return startLength;
    } else {
        return addLetter;
    }
})
console.log(longestEmail);

//6.
let instructors = users.reduce((finalString,user, index)=>{
    if(index===users.length -1){
        return `${finalString} ${user.name}.`
    }else {
        return `${finalString} ${user.name},`
    }
}, "Your instructors are:")
console.log(instructors);
