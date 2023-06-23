/*
 In a web application, a user wants to create a new account.When the user submits the registration form, 
 this code is executed to send the user's name and email to the server for account creation. The server 
 responds with a JSON object containing the user's information, such as an ID or other details. The code
  then logs the response to the console, allowing the developer to further process the data or display 
  a success message to the user. If there is an error in the request, the code logs the corresponding 
  HTTP error code, helping the developer identify and handle the issue.
*/

const user = {
    name:"Baro",
    email:"adddtew242@gmail.com"

}
const handleFetch=async(user)=>{
let url='http://reqres.in/api/users'

let res=await fetch(url,
    {
    method:'POST',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(user)
})
if(res.ok){
    
    let json =await res.json()
    console.log(json)
}
else{
    console.error("HTTP ERROR" + res.status)
}
}
handleFetch()