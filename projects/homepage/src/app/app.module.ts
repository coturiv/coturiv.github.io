import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { FeatherIconComponent } from './components/feather-icon/feather-icon.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    FeatherIconComponent,
    ShowcaseComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
