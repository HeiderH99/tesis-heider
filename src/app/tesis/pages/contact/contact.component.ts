import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onContact(param: string) {
    if (param === 'LinkedIn') window.open('http://www.linkedin.com/in/heiderreyhernandez', '_blank')
    if (param === 'Facebook') window.open('https://www.facebook.com/heider.hernandez.92?mibextid=ZbWKwL', '_blank')
    if (param === 'Instagram') window.open('https://facebook.com', '_blank')
    if (param === 'WhatsApp') window.open('https://facebook.com', '_blank')
    if (param === 'Email') window.open('https://facebook.com', '_blank')
    if (param === 'Github') window.open('https://github.com/HeiderH99', '_blank')
  }

}
