/**
 * Fetches user data from an API endpoint and displays it as cards 
 * @function getUsers
 */
document.getElementById('getUsersBtn').addEventListener('click', getUsers);

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const cardGrid = document.querySelector('.card-grid');
            data.forEach(user => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
          <img src="${user.photo}" alt="${user.name}">
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
        `;
                cardGrid.appendChild(card);
            });
        })
        .catch(error => console.error('Error:', error));
}
