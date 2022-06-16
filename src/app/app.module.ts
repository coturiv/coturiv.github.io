import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _domSanitizer: DomSanitizer, private _matIconRegistry: MatIconRegistry) {
    // Register icon sets
    this._matIconRegistry.addSvgIconSetInNamespace(
      'heroicons_outline',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-outline.svg')
    );
  }
}
