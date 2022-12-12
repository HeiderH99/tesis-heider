import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css'],
})
export class InfoPageComponent implements OnInit {

  items!: MenuItem[];
  optionInfo: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Cáncer de mama',
        icon: 'pi pi-fw pi-shield',
        command: () => {
          this.optionInfo = 0;
        },
      },
      {
        label: 'Gráficos',
        icon: 'pi pi-fw pi-chart-pie',
        command: () => {
          this.optionInfo = 1;
        },
      },
      // {
      //   label: 'Documentation',
      //   icon: 'pi pi-fw pi-file',
      //   command: () => {
      //     this.optionInfo = 2;
      //   },
      // },
    ];
  }
}
