const url = new URL(window.location);
let username = url.searchParams.get("name");
let email = url.searchParams.get("email");
let github = url.searchParams.get("github");

document.getElementById("name-ticket").innerText = username;
document.getElementById("name").innerText = username ;
document.getElementById("email").innerText = email;
document.getElementById("email-ticket").innerText = email;
document.getElementById("github-ticket").innerText = github;
console.log('This is Current Url',url);
console.log('Name, email and Github',username,email,github)

