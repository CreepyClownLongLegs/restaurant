import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
// @ts-ignore
import 'swiper/css';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {

@ViewChildren('revealEl') revealEls!: QueryList<ElementRef>;


currentIndex = 0;
total = 0;

ngAfterViewInit() {
  setTimeout(() => {
    const els = document.querySelectorAll('.reveal');
    const els1 = document.querySelectorAll('.revealHorizontal');
    console.log('found:', els.length);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });

    els.forEach(el => observer.observe(el));

     els1.forEach(el1 => observer.observe(el1));
  }, 500);

  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 3 },
    },
  });

  

}



}