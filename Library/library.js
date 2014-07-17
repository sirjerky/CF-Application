var Book = function (t) {
    var book = {
        title: t,
        checkedOut: true,
        getShelf: function () {
            var shelfName = this.title.charAt(0);
            return shelfName;

        },
        enshelf: function () {
          var el = this;
          if (el.checkedOut === true) {
              
                if (Library.hasShelves === true) {
                    Library.shelves.forEach(function (shelf) {
                        if (shelf.thisShelf === el.getShelf()) {
                            alert("You have put " + el.title + " on shelf " + el.getShelf() + ".");
                            shelf.books.push(el);
                            el.checkedOut = false;
                        }
                    });
                    if (el.checkedOut === true) {
                        Library.newShelf(el);
                        alert("building a new shelf...");
                        el.checkedOut = false;
                    }
                } else {
                    Library.newShelf(el);
                    alert("building new shelf...");
                    el.checkedOut = false;
                }
            } else {
                alert("That book is already on shelf " + el.getShelf() + "!");
            }
        },
        unshelf: function () {
          var el = this;
            if (el.checkedOut === false) {
              Library.shelves.forEach(function (shelf) {
                        if (shelf.thisShelf === el.getShelf()) {
                          for (i = shelf.books.length-1; i>=0; i--){
                            if (shelf.books[i].title === el.title){
                              shelf.books.splice(i,1);
                              alert("You have grabbed " + el.title + " from the " + el.getShelf() + " shelf. Enjoy your reading!");
                              el.checkedOut = true;
                          }
                          }
                        }
              });
                                      
                            
                          
                
                
            } else {
                alert("That book is already checked out!");
            }
        }
    };
    return book;
};

var Shelf = function (name) {
    var shelf = {
        thisShelf: name,
        books: [],
        getBooks: function () {
            this.books.forEach(function (book) {
                console.log(book.title + "\n");
            });
        }

    };
    return shelf;
};

var Library = {
    shelves: [],
    hasShelves: false,
    newShelf: function (x) {
      
        var shelfName = x.getShelf();
        var shelf = new Shelf(shelfName);
        shelf.books.push(x);

        this.shelves.push(shelf);
        this.hasShelves = true;
        
      
    },
    allBooks: function () {
      this.shelves.forEach(function(shelf){
        console.log("Shelf " + shelf.thisShelf);
        shelf.getBooks();
      });
    }
};