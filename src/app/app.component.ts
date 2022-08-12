import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'tesis-heider';

  visibleSidebar: boolean = false;
  items!: MenuItem[];

  constructor(
    private primeNgConfig: PrimeNGConfig,
  ) {}

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;

    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/tesis/home'],
        routerLinkActiveOptions: { exact: true },
        command: () => {
          this.visibleSidebar = false;
        }
      },
      {
        label: 'Información',
        icon: 'pi pi-fw pi-book',
        routerLink: ['/tesis/info'],
        routerLinkActiveOptions: { exact: true },
        command: () => {
          this.visibleSidebar = false;
        }
      },
      {
        label: 'API',
        icon: 'pi pi-fw pi-book',
        routerLink: ['/tesis/api'],
        routerLinkActiveOptions: { exact: true },
        command: () => {
          this.visibleSidebar = false;
        }
      },
      {
        label: 'Contacto',
        icon: 'pi pi-fw pi-phone',
        routerLink: ['/tesis/contact'],
        routerLinkActiveOptions: { exact: true },
        command: () => {
          this.visibleSidebar = false;
        }
      },
    ];
  }
}
