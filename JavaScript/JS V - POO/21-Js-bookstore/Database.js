module.exports = class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: [], 
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    findBookByName(bookName) {
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book) {
        const bookExists = this.findBookByName(book.name)
        if (!bookExists) [
            this.#storage.books.push(book)
        ]
    }

    addBooksToStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.addBookToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.removeBooksFromStock(quantity)
    }
}

//////////////////////////

findPosterByName(posterName) {
    return this.#storage.posters.find(p => p.name === posterNameName)
}

savePoster(poster) {
    const posterExists = this.findPosterByName(poster.name)
    if (!posterExists) [
        this.#storage.posters.push(poster)
    ]
}

addBooksToStock(bookName, quantity) {
    const book = this.findBookByName(bookName)
    book?.addBookToStock(quantity)
}

removeBooksFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName)
    book?.removeBooksFromStock(quantity)
}
}