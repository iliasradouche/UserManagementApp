import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private selectedLanguage: string = 'en';

  constructor() { }

  getSelectedLanguage(): string {
    return this.selectedLanguage;
  }

  setSelectedLanguage(language: string): void {
    this.selectedLanguage = language;
    if (language === 'fr') {
      console.log('Selected language: French');
    } else if (language === 'en') {
      console.log('Selected language: English');
    }
  }
}
