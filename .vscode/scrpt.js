const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
];
const authenticate = (username, password) => {
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return true;
        }
    }
    return false;
}
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    if (authenticate(username, password)) {
    if (authenticate(username, password) || staticAuthenticate(username, password)) {
        alert('Login successful!');
    }
    else {
        alert('Invalid credentials. Please try again.');
    }
}});



