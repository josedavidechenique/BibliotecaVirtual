document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    const books = [
        { title: "Libro 1", cover: "C:\\Users\\Jose David\\Downloads\\Logo academia educativa ilustrativo azul y celeste.png" }
    ];

    const bookGrid = document.getElementById('bookGrid');

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';

        const bookCover = document.createElement('img');
        bookCover.src = book.cover;
        bookCover.alt = book.title;

        const bookTitle = document.createElement('div');
        bookTitle.className = 'book-title';
        bookTitle.textContent = book.title;

        const bookmarkContainer = document.createElement('div');
        bookmarkContainer.className = 'bookmark-container';

        const bookmarkLabel = document.createElement('label');
        bookmarkLabel.className = 'ui-bookmark';

        const bookmarkInput = document.createElement('input');
        bookmarkInput.type = 'checkbox';

        const bookmarkDiv = document.createElement('div');
        bookmarkDiv.className = 'bookmark';

        const bookmarkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        bookmarkSvg.setAttribute('viewBox', '0 0 32 32');

        const bookmarkG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        const bookmarkPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        bookmarkPath.setAttribute('d', 'M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z');

        bookmarkG.appendChild(bookmarkPath);
        bookmarkSvg.appendChild(bookmarkG);
        bookmarkDiv.appendChild(bookmarkSvg);

        bookmarkLabel.appendChild(bookmarkInput);
        bookmarkLabel.appendChild(bookmarkDiv);
        bookmarkContainer.appendChild(bookmarkLabel);
        bookElement.appendChild(bookCover);
        bookElement.appendChild(bookTitle);
        bookElement.appendChild(bookmarkContainer);

        bookGrid.appendChild(bookElement);
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'index.html';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    alert('Usuario registrado exitosamente');
    window.location.href = 'login.html';
});