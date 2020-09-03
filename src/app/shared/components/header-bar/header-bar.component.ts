import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'header-bar-component',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {

    const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByTagName('nav')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
  }

}
