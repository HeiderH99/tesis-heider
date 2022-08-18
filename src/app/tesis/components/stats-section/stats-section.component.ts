import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrls: ['./stats-section.component.css'],
})
export class StatsSectionComponent implements OnInit {
  pdfs: any[] = [
    { code: 1, source: '../../../../assets/pdfs/20-Breast-fact-sheet.pdf' },
    { code: 2, source: '../../../../assets/pdfs/CA3_BreastCancer.pdf' },
    { code: 3, source: '../../../../assets/pdfs/Infografía-Cáncer-de-mama colombia 2020.pdf' }
  ];
  responsiveOptions: any;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {}
}
