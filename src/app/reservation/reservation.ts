import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  imports: [FormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation implements AfterViewInit{

@ViewChild('reservationForm') form!: ElementRef;
  @ViewChild('successBox') successBox!: ElementRef;

  loading = false;

  ngAfterViewInit() {
    this.setMinDate();
  }

  onSubmit() {
    const formEl = this.form.nativeElement as HTMLFormElement;

    if (!formEl.checkValidity()) return;

    this.loading = true;

    const submitBtn = formEl.querySelector('.reservations-submit') as HTMLButtonElement;
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    setTimeout(() => {
      formEl.style.display = 'none';
      this.successBox.nativeElement.style.display = 'flex';

      this.successBox.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      this.loading = false;
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1200);
  }

  resetForm() {
    const formEl = this.form.nativeElement as HTMLFormElement;

    formEl.reset();
    formEl.style.display = 'flex';
    this.successBox.nativeElement.style.display = 'none';
  }

  private setMinDate() {
    const dateInput = document.getElementById('date') as HTMLInputElement;

    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }
  }

}
