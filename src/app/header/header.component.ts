import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private translate: TranslateService, private languageService: LanguageService) {
    translate.setDefaultLang('en');
  }

  get selectedLanguage(): string {
    return this.languageService.getSelectedLanguage();
  }

  set selectedLanguage(language: string) {
    this.languageService.setSelectedLanguage(language);
    this.switchLanguage(language);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
