let person = {
    name: "Preet",
    age: 21,
    isStudent: true
};

console.log(person.name);
console.log(person["age"]);

let user = {
    "user-name": "Preet"
};
console.log(user["user-name"]);

//Adding Property
person.city = "Melbourne";
console.log(person);
// Update
person.age = 22;
console.log(person.age);
//Delete
delete person.isStudent;
console.log(person);

//Object Method 
let car = {
    brand: "Tesla",
    start: function() {
        console.log("Car started");
    }
};

car.start();

//Loop 
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

//Nested Object
let student = {
    name: "Preet",
    subject: {
        math: 90,
        english: 85,
    }
};

console.log(student.subject.math);

//This Keyword Object
let use1r = {
    name: "Preet",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};
use1r.greet();

console.log(Object.keys(person)); 
console.log(Object.values(person)); 
console.log(Object.entries(person)); 


let Library = {
    books: [
        { title: "1984", author: "George Orwell"},
        { title: "To kill a Mockingbird", author: "Harper Lee"}
    ],
    addBook(book){
        this.books.push(book);
    },
    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.title} by ${book.author}`);
        });
    }
};

Library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald"});

Library.listBooks();
