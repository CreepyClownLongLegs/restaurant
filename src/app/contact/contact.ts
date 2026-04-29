import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactSubmitted = false;

  contactData = {
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onContactSubmit(): void {
    // Handle form submission here (e.g. call an API or email service)
    console.log('Contact form submitted:', this.contactData);
    this.contactSubmitted = true;
  }

  resetContactForm(): void {
    this.contactSubmitted = false;
    this.contactData = {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}