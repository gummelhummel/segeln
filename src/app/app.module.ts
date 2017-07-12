import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { TextComponent } from './text/text.component';
import { PictureComponent } from './picture/picture.component';
import { TemplateHostDirective } from './section/template-host.directive';
import { SlideShowComponent } from './slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    TextComponent,
    PictureComponent,
    TemplateHostDirective,
    SlideShowComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  entryComponents: [SlideShowComponent, TextComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
