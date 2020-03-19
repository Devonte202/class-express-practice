class Book {
  constructor(title, author, description, imageURL) {
    this.id = ++Book.count;
    this.title = title;
    this.author = author;
    this.description = description;
    this.imageURL = imageURL;
    this.dateAdded = new Date();
  }
}

Book.count = 0;

module.exports = Book