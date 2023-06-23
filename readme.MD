## here is a quiz

Create an async function getUsers(names), that gets an array of GitHub logins, fetches the users from GitHub and returns an array of GitHub users.

The GitHub url with user information for the given USERNAME is: https://api.github.com/users/USERNAME.

## Important details:

There should be one fetch request per user.
Requests shouldn’t wait for each other. So that the data arrives as soon as possible.
If any request fails, or if there’s no such user, the function should return null in the resulting array.