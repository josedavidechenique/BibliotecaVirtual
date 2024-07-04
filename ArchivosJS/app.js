document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: 'Libro 1', cover: 'cover1.jpg', file: 'libro1.pdf' },
        { title: 'Libro 2', cover: 'cover2.jpg', file: 'libro2.pdf' },
        // Agrega más libros aquí
    ];

    const bookContainer = document.getElementById('book-container');
    const loadBooksButton = document.getElementById('load-books');

    loadBooksButton.addEventListener('click', function() {
        bookContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar los libros
        if (books.length === 0) {
            const emptyBookElement = document.createElement('div');
            emptyBookElement.classList.add('book');
            bookContainer.appendChild(emptyBookElement);
        } else {
            books.forEach(book => {
                const bookElement = document.createElement('div');
                bookElement.classList.add('book');
                bookElement.innerHTML = `<img src="${book.cover}" alt="${book.title}"><p>${book.title}</p>`;

                bookElement.addEventListener('click', function() {
                    window.open(book.file, '_blank');
                });

                bookContainer.appendChild(bookElement);
            });
        }
    });
});