const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8080
const path = require('path')

const Book = require('./models/Book')
const BookList = require('./models/BookList')

const list = new BookList('wassup')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Setting a public folder for our static files
app.use(express.static('public'))

//Set EJS as our templating language
app.set('view engine', 'ejs')

app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, 'views','add-book.html'))
})

app.post('/add', (req, res) => {
  const {title, author, description, imageURL} = req.body
  const book = new Book(title, author, description, imageURL)
  list.addBook(book)
  console.log(list)
  res.render('index.ejs', {books: list.books})
})

app.post('/delete/:id', (req, res) => {
  const bookId = req.params.id
  list.deleteBook(bookId)
  res.render('index.ejs', {books: list.books})
})

app.get('/:id', (req, res) =>{
  const id = req.params.id
  res.render('book-info.ejs', { book: list.books[id] })
})

app.listen(port, () => console.log(`Now listening on port ${port}.`))