const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
  displayTitle: function (title, author) {
    console.log(title, author);
  },
  updatedYear: function (latestYear = 2018) {
    console.log((this.year = latestYear));
  },
};

console.log(book.title, book.author);
book.displayTitle(book.title, book.author);
book.updatedYear();

const book2 = {
  title: "The Power of Habit",
  author: "Charles Duhigg",
  year: 2012,
  displayTitle: function () {
    console.log(this.title, this.author);
  },
  updatedYear: function (latestYear = 2018) {
    console.log((this.year = latestYear));
  },
};

const library = [{name: "Library made for Programmers"}, book, book2];
console.log(library)

console.log(library[0].name)

for(let i = 1; i< library.length;i++)
{
  console.log(library[i].title)
}

const book3 = {
  title: "The Power of Habit",
  author: "Charles Duhigg",
  year: 2012,
  displayTitle: function () {
    return console.log(`${this.title}, by ${this.author} released in ${this.year}`);
  },
  updatedYear: function (latestYear = 2018) {
    console.log((this.year = latestYear));
  },
}
book3.displayTitle()

for(let key in book2){
  if(book2.hasOwnProperty(key)){
    console.log(`${key}: ${book2[key]}`)
  }
}

console.log(Object.keys(book2))
console.log(Object.values(book2))