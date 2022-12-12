import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesisRoutingModule } from './tesis-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { ApiComponent } from './pages/api/api.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CancerSectionComponent } from './components/cancer-section/cancer-section.component';
import { StatsSectionComponent } from './components/stats-section/stats-section.component';
import { DocsSectionComponent } from './components/docs-section/docs-section.component';
import { TreatmentsSectionComponent } from './components/treatments-section/treatments-section.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileFormComponent } from './components/file-form/file-form.component';


@NgModule({
  declarations: [
    HomePageComponent,
    InfoPageComponent,
    ApiComponent,
    ContactComponent,
    CancerSectionComponent,
    StatsSectionComponent,
    DocsSectionComponent,
    TreatmentsSectionComponent,
    FileFormComponent
  ],
  imports: [
    CommonModule,
    TesisRoutingModule,
    PrimeNgModule,
    PdfViewerModule
  ]
})
export class TesisModule { }
