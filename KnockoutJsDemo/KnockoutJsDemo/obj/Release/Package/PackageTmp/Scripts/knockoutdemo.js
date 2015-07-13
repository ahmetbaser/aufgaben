/// <reference path="jquery-2.1.4.min.js" />


(function ($, ko) {

    if ($ && ko) {
        console.log('Alle Notwendigen Framework sind OK!');
    }


    var vm = {
        firstName: "Ahmet",
    };

    ko.applyBindings(vm);



    //var baseUrl = '/api/Books';

    //var ViewModel = {
    //    heading: 'Das ist eine Heading mit KnockoutJS',
    //    allBooks: ko.observableArray([])
    //};


    //ViewModel.deleteBook = function (book) {
    //    ViewModel.allBooks.remove(book);
    //};

    //ViewModel.addBook = function (book) {
    //    var bookModel = {
    //        ID: ko.observable(book.ID),
    //        Title: ko.observable(book.Title),
    //        Author: ko.observable(book.Author)

    //    };

    //    bookModel.DisplayText = ko.computed(
    //        function () { return this.Title() + 'von ' + this.Author() },
    //        bookModel);

    //    ViewModel.allBooks.push(bookModel);
    //};
    //$.ajax({
    //    url: baseUrl,
    //    type: 'GET',
    //    accepts: 'application/json',
    //    success: function (bookarray) {
    //        for (var i = 0; i < bookarray.length; i++) {
    //            ViewModel.addBook(bookarray[i]);
    //        }
    //    }
    //});


    //ko.applyBindings(ViewModel);

  

})(jQuery || null, ko || null);