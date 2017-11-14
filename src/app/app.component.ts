import { Component } from '@angular/core';
import {ApplicationComponent} from './components/application/application.component'
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
   constructor(private translate: TranslateService) {}
   switchLanguage(language: string) {
    this.translate.use(language);
  }
}
