

//example from javascrpit info 
//fetch makes a network request to the url and returns a promise.
//The promise resolves with a response object when the 
//remote server responds with headers,
const fetch=require('node-fetch')
const git=()=>{
fetch('/article/promise-chaining/user.json')
.then(
    res => res.json()
    
)
.then(
    user => fetch(`https://api.github.com/users/${user.name}`)
    
).then(
    res=>res.json()
    )
.then(user => {
      console.log(`Fetching avatar for ${user.login}`);
      setTimeout(() => {
        console.log(`Finished showing ${user.login}`);
      }, 2000).then(
    githubUsername => console.log(`finished showing ${githubUsername.name}`)
      )})
    .catch(err => console.log(err));
}
git()




const timeWait=async()=>{
    let action = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("done!"),5000)
         })
         //await makes JavaScript wait until that promise settles and returns its result.
    let actionsall= await action     
    console.log(actionsall)
}

timeWait()