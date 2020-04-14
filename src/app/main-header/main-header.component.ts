import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  firstName;
  lastName;
  constructor() {
    this.firstName = 'Juan';
    this.lastName = 'Laredo';
   }
   
  ngOnInit(): void { }
  showGreeting() {
    const banner = document.getElementById("banner");
    banner.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.'
  }
  hideGreeting() {
    const banner = document.getElementById("banner");
    banner.innerHTML = 'r1c2';
  }


}
