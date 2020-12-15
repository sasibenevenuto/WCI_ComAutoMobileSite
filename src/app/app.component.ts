import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WCI Automação Comercial';  
  items: MenuItem[] = [];

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {    

    iconRegistry.addSvgIcon('print',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/ic-print.svg'));

    iconRegistry.addSvgIcon('account_balance',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/account_balance-24px.svg'));

    iconRegistry.addSvgIcon('list',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/list-24px.svg'));

    iconRegistry.addSvgIcon('launch',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/launch-24px.svg'));

    iconRegistry.addSvgIcon('text_snippet',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/text_snippet-24px.svg'));

    iconRegistry.addSvgIcon('search',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/search-24px.svg'));

      iconRegistry.addSvgIcon('sair',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/power_settings_new-24px.svg'));
  }
  ngOnInit() {
    this.items = [
      {
        label: 'Geral',
        icon: 'pi pi-fw pi-table',
        items: [
          {
            label: 'Cidades',
            icon: 'pi pi-fw pi-map-marker',
            routerLink:'/state'                       
          },
          {
            label: 'Estados',
            icon: 'pi pi-fw pi-sitemap',
            routerLink:'/state'                       
          },
          {
            label: 'Usuários',
            icon: 'pi pi-fw pi-users'
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          },

        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',

          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }  
}
