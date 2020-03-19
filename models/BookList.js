class BookList{
    constructor(user){
        this.user = user
        this.books = {}
        this.count = 0
    }
    
    addBook(book){
        this.books[book.id] = book
        this.count += 1
        return this.count
    }
    
    deleteBook(bookId){
        const deletedBook = this.books[bookId]
        delete this.books[bookId]
        this.count -= 1
        return deletedBook
    }
    
    deleteAllBooks(){
        this.books = {}
        this.count = 0
    }
}

module.exports = BookList