import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {LocalStorageService, LocalStorage} from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Book-App';
  display='none';
  page =1;
  books = [
  {
        "Name": "The Invitable",
        "Author": "Kevin",
		"NumberOfPages": "180",
		"DateOfPublication": "12/03/2013"
    },
    {
        "Name": "Monkeys",
        "Author": "Antonio",
		"NumberOfPages": "120",
		"DateOfPublication": "04/06/2016"
    },
    {
       "Name": "Innovation",
        "Author": "Calestous",
		"NumberOfPages": "110",
		"DateOfPublication": "03/03/2016"
    },
    {
       "Name": "How to build habbits",
        "Author": "Nir",
		"NumberOfPages": "100",
		"DateOfPublication": "01/04/2013"
    },
    {
       "Name": "The Innovators",
        "Author": "Clayton",
		"NumberOfPages": "80",
		"DateOfPublication": "03/06/1997"
    },
    {
        "Name": "Hackers & Paniters",
        "Author": "Paul",
		"NumberOfPages": "124",
		"DateOfPublication": "12/12/2015"
    },
     {
       "Name": "Hatching Twitter",
        "Author": "Nick",
		"NumberOfPages": "60",
		"DateOfPublication": "03/06/2015"
    },
     {
        "Name": "Objectives",
        "Author": "Obs",
		"NumberOfPages": "176",
		"DateOfPublication": "03/08/2016"
    },
     {
        "Name": "The emerging technologies",
        "Author": "Soonish",
		"NumberOfPages": "120",
		"DateOfPublication": "06/07/2016"
    },
    {
       "Name": "Rise of the machines",
        "Author": "Steven",
		"NumberOfPages": "127",
		"DateOfPublication": "07/06/2013"
    },
     {
        "Name": "The Drivers in the driverless",
        "Author": "Future",
		"NumberOfPages": "112",
		"DateOfPublication": "06/08/2008"
    },
     {
        "Name": "Teaching with tools",
        "Author": "Susan",
		"NumberOfPages": "145",
		"DateOfPublication": "09/07/2017"
    },
     {
        "Name": "Using Technology to unlock Music",
        "Author": "Anthony",
		"NumberOfPages": "150",
		"DateOfPublication": "04/06/2011"
    },
     {
        "Name": "The Ethics of Invention",
        "Author": "Sheila",
		"NumberOfPages": "100",
		"DateOfPublication": "06/02/2016"
    }
]

constructor(){
 console.log("Page loaded !!!!")
}
active = false;
submitted = false;

// On Submit Update book details
 onSubmit(book) { 
      this.submitted = true; 
       const updatedBook =book;
       this.book =updatedBook;
       localStorage.setItem("currentBook", JSON.stringify(updatedBook));
  }
  
  // On click Close Modal and remove local storage
 onCloseHandled = function(){
     this.display='none';
     this.submitted = false; 
     localStorage.removeItem('currentBook');
  }
  
// On click Open Modal with Book details
  openModal = function(book){  
  this.active = true;
  localStorage.setItem("currentBook", JSON.stringify(book));
  this.display="block";
  const bookDetails= JSON.parse(localStorage .getItem('currentBook'));
  this.book=bookDetails;  
  
  // On click Reset the form with original Book details
   default = function() {
   this.submitted = false; 
    const currentBook= JSON.parse(localStorage .getItem('currentBook'));
       console.log("currentBook",JSON.stringify(currentBook));
       this.book=currentBook;
  }
  }
}
